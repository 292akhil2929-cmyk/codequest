(function(){"use strict";let t=!1,e=null;async function n(){try{importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"),e=await loadPyodide(),t=!0,postMessage({type:"ready"})}catch{postMessage({type:"load-error",error:"Could not load the Python runtime from the CDN. Check your internet connection and reload the page."})}}n(),self.onmessage=async o=>{const{type:s,data:a}=o.data;if(s==="ping"){postMessage({type:t?"ready":"load-error",error:"Python not ready"});return}if(s==="execute"){if(!t){postMessage({type:"error",error:"Python runtime is not ready yet."});return}const{userCode:d,testInput:i,stdin:y}=a;try{e.runPython(`
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
      `),await e.runPythonAsync(d),await e.runPythonAsync(i);const r=e.runPython("_stdout_buffer.getvalue()");postMessage({type:"output",output:r})}catch(r){postMessage({type:"error",error:r.message})}}}})();
