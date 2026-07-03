(function(){"use strict";let n=!1,r=null;function a(t){if(!t)return t;const o=t.lastIndexOf('File "<exec>"');if(o===-1)return t;let e=t.lastIndexOf(`
`,o);return e=e===-1?0:e+1,t.slice(e).trim()}async function d(){try{importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"),r=await loadPyodide(),n=!0,postMessage({type:"ready"})}catch{postMessage({type:"load-error",error:"Could not load the Python runtime from the CDN. Check your internet connection and reload the page."})}}d(),self.onmessage=async t=>{const{type:s,data:o}=t.data;if(s==="ping"){postMessage({type:n?"ready":"load-error",error:"Python not ready"});return}if(s==="execute"){if(!n){postMessage({type:"error",error:"Python runtime is not ready yet."});return}const{userCode:e,testInput:u,stdin:y}=o;try{r.runPython(`
def _codequest_reset():
    import sys, io, __main__
    ns = __main__.__dict__
    ns.clear()
    ns['__name__'] = '__main__'
    sys.stdin = io.StringIO(`+JSON.stringify(y||"")+`)
    global _stdout_buffer
    _stdout_buffer = io.StringIO()
    sys.stdout = _stdout_buffer

_codequest_reset()
      `),await r.runPythonAsync(e),await r.runPythonAsync(u);const i=r.runPython("_stdout_buffer.getvalue()");postMessage({type:"output",output:i})}catch(i){postMessage({type:"error",error:a(i.message)})}}}})();
