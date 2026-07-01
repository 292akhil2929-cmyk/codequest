import React from 'react';
import './CodeEditor.css';
export default function CodeEditor({ value, onChange }) {
  return <textarea className="code-editor" value={value} onChange={(e) => onChange(e.target.value)} spellCheck="false" autoCapitalize="off" autoCorrect="off" />;
}
