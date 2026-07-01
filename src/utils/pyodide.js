let worker = null;
let readyPromise = null;

const LOAD_TIMEOUT_MS = 45000;
const EXEC_TIMEOUT_MS = 15000;

function spawnWorker() {
  // classic (non-module) worker: importScripts() below is not available in module workers
  worker = new Worker(new URL('../workers/pyodide.worker.js', import.meta.url));
  readyPromise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Timed out loading the Python runtime. Check your internet connection and try again.'));
    }, LOAD_TIMEOUT_MS);
    const onMessage = (e) => {
      if (e.data.type === 'ready') {
        clearTimeout(timer);
        worker.removeEventListener('message', onMessage);
        resolve();
      } else if (e.data.type === 'load-error') {
        clearTimeout(timer);
        worker.removeEventListener('message', onMessage);
        reject(new Error(e.data.error || 'Failed to load the Python runtime.'));
      }
    };
    worker.addEventListener('message', onMessage);
    worker.onerror = (e) => {
      clearTimeout(timer);
      reject(new Error('Failed to load the Python runtime: ' + (e.message || 'unknown worker error')));
    };
  });
}

function getWorker() {
  if (!worker) {
    spawnWorker();
  }
  return { worker, readyPromise };
}

function killWorker() {
  if (worker) {
    worker.terminate();
    worker = null;
    readyPromise = null;
  }
}

function withTimeout(promise, ms, message) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      killWorker();
      reject(new Error(message));
    }, ms);
    promise.then((v) => { clearTimeout(timer); resolve(v); },
                 (err) => { clearTimeout(timer); reject(err); });
  });
}

function runOne(worker, userCode, testInput, stdin, expected) {
  return new Promise((resolve, reject) => {
    const handleMessage = (e) => {
      const { type, output, error } = e.data;
      if (type === 'output') {
        worker.removeEventListener('message', handleMessage);
        resolve({ output, expected });
      } else if (type === 'error') {
        worker.removeEventListener('message', handleMessage);
        reject(new Error(error));
      }
    };
    worker.addEventListener('message', handleMessage);
    worker.postMessage({ type: 'execute', data: { userCode, testInput, stdin } });
  });
}

export async function runCode(userCode, testCases) {
  const { worker, readyPromise } = getWorker();
  try {
    await withTimeout(readyPromise, LOAD_TIMEOUT_MS,
      'Timed out loading the Python runtime. Check your internet connection and try again.');
  } catch (err) {
    killWorker();
    throw err;
  }

  const cases = (!testCases || testCases.length === 0)
    ? [{ input: '', expectedOutput: '' }]
    : testCases;

  const results = [];
  for (const test of cases) {
    try {
      const result = await withTimeout(
        runOne(worker, userCode, test.input, test.stdin || test.input || '', test.expectedOutput),
        EXEC_TIMEOUT_MS,
        'Your code took too long to run (possible infinite loop). Execution was stopped.'
      );
      results.push(result);
    } catch (err) {
      killWorker();
      throw err;
    }
  }
  return results;
}
