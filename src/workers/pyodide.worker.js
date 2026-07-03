let pyodideReady = false;
let pyodide = null;

// Pyodide's raw traceback includes its own internal interpreter frames
// (_pyodide/_base.py etc). Keep just the part that actually describes the
// student's code: from the last "<exec>" frame onward.
function simplifyPythonError(message) {
  if (!message) return message;
  const marker = 'File "<exec>"';
  const idx = message.lastIndexOf(marker);
  if (idx === -1) return message;
  let lineStart = message.lastIndexOf('\n', idx);
  lineStart = lineStart === -1 ? 0 : lineStart + 1;
  return message.slice(lineStart).trim();
}

async function loadPyodideAndPackages() {
  try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js');
    pyodide = await loadPyodide();
    pyodideReady = true;
    postMessage({ type: 'ready' });
  } catch (err) {
    postMessage({ type: 'load-error', error: 'Could not load the Python runtime from the CDN. Check your internet connection and reload the page.' });
  }
}

loadPyodideAndPackages();

self.onmessage = async (event) => {
  const { type, data } = event.data;
  if (type === 'ping') { postMessage({ type: pyodideReady ? 'ready' : 'load-error', error: 'Python not ready' }); return; }

  if (type === 'execute') {
    if (!pyodideReady) {
      postMessage({ type: 'error', error: 'Python runtime is not ready yet.' });
      return;
    }

    const { userCode, testInput, stdin } = data;
    try {
      // NOTE: the reset logic must live inside a function. __main__.__dict__ IS the
      // globals dict this code runs in, so clearing it while executing top-level
      // statements wipes the names (sys, io, __main__ itself) those very statements
      // need to keep running, raising NameError. Inside a function, local names use
      // fast-locals and survive the globals dict being cleared out from under them.
      pyodide.runPython(`
def _codequest_reset():
    import sys, io, __main__
    ns = __main__.__dict__
    ns.clear()
    ns['__name__'] = '__main__'
    sys.stdin = io.StringIO(` + JSON.stringify(stdin || '') + `)
    global _stdout_buffer
    _stdout_buffer = io.StringIO()
    sys.stdout = _stdout_buffer

_codequest_reset()
      `);

      await pyodide.runPythonAsync(userCode);
      await pyodide.runPythonAsync(testInput);
      const output = pyodide.runPython('_stdout_buffer.getvalue()');
      postMessage({ type: 'output', output });
    } catch (error) {
      postMessage({ type: 'error', error: simplifyPythonError(error.message) });
    }
  }
};
