import React, { useState, useEffect } from 'react';
import { getLevelById, levels } from '../utils/levels';
import { completeLevel, unlockNextLevels, loseLife, addCoins } from '../utils/gameState';
import CodeEditor from './CodeEditor';
import { runCode } from '../utils/pyodide';
import './LevelView.css';

function TheoryBlock({ level }) {
  if (!level) return null;
  return (
    <>
      <div className="story-box"><p>{level.story}</p></div>
      {level.explanation && level.explanation.length > 0 && (
        <div className="explanation-box">
          <h3>How it works</h3>
          <ul>
            {level.explanation.map((point, idx) => <li key={idx}>{point}</li>)}
          </ul>
        </div>
      )}
      {level.diagram && (
        <div className="diagram-box">
          <h3>Diagram</h3>
          <div className="diagram-svg" dangerouslySetInnerHTML={{ __html: level.diagram }} />
        </div>
      )}
      {level.mode === 'challenge' && (
        <div className="example-box">
          <h3>Example</h3>
          <pre>{level.starterCode}</pre>
        </div>
      )}
    </>
  );
}

export default function LevelView({ levelId, onBack, onComplete, playSuccess, playFail }) {
  const level = getLevelById(levelId);
  const theoryLevel = level && level.mode === 'challenge'
    ? levels.find(l => l.mode === 'teach' && l.topic === level.topic)
    : null;

  const [code, setCode] = useState(level?.starterCode || '');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [running, setRunning] = useState(false);
  const [revealedHints, setRevealedHints] = useState([]);
  const [starsEarned, setStarsEarned] = useState(0);
  const [testResults, setTestResults] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!running) { setLoadingMessage(''); return; }
    const t = setTimeout(() => setLoadingMessage('First run can take up to 30s while the Python runtime loads...'), 4000);
    return () => clearTimeout(t);
  }, [running]);

  if (!level) return <div>Level not found</div>;

  const handleRun = async () => {
    setRunning(true);
    setError(null);
    setOutput('');
    setTestResults([]);

    if (level.mode === 'teach') {
      try {
        const results = await runCode(code, []);
        setOutput(results.length > 0 ? results[0].output : 'Code executed successfully!');
        setCompleted(true);
        addCoins(5);
        playSuccess();
      } catch (err) {
        setError(err.message);
        playFail();
      } finally {
        setRunning(false);
      }
      return;
    }

    try {
      const results = await runCode(code, level.testCases);
      setTestResults(results);
      const allPassed = results.every(r => r.output === r.expected);
      if (allPassed) {
        const stars = Math.max(1, 3 - revealedHints.length);
        setStarsEarned(stars);
        completeLevel(level.id, stars, level.xpReward);
        unlockNextLevels(level.id, levels);
        addCoins(level.coinReward || 10);
        setCompleted(true);
        playSuccess();
      } else {
        setOutput('Some tests failed. Check the differences below.');
        loseLife();
        playFail();
      }
    } catch (err) {
      setError(err.message);
      loseLife();
      playFail();
    } finally {
      setRunning(false);
    }
  };

  const handleHint = () => {
    if (revealedHints.length < level.hints.length) {
      setRevealedHints([...revealedHints, level.hints[revealedHints.length]]);
    }
  };

  const hintsRemaining = level.hints.length - revealedHints.length;

  return (
    <div className="level-view">
      <button onClick={onBack} className="btn-back">Back to Map</button>
      <div className="level-header">
        <span className="mode-badge">{level.mode === 'teach' ? 'Learn' : 'Challenge'}</span>
        <span className="topic-badge">{level.topic}</span>
        <h2>{level.title}</h2>
      </div>

      {level.mode === 'challenge' ? (
        <>
          <h3 className="section-label">Theory</h3>
          {theoryLevel ? <TheoryBlock level={theoryLevel} /> : (
            <div className="story-box"><p>{level.story}</p></div>
          )}
          <h3 className="section-label">Quiz</h3>
          <div className="story-box"><p>{level.story}</p></div>
        </>
      ) : (
        <TheoryBlock level={level} />
      )}

      <div className="editor-container"><CodeEditor value={code} onChange={setCode} /></div>
      <div className="controls">
        <button className="btn-primary" onClick={handleRun} disabled={running}>
          {running ? 'Running...' : 'Run'}
        </button>
        {level.mode === 'challenge' && level.hints.length > 0 && (
          <button className="btn-secondary" onClick={handleHint} disabled={hintsRemaining === 0}>
            {hintsRemaining === 0 ? 'No hints left' : `Show Hint (${hintsRemaining} left)`}
          </button>
        )}
      </div>
      {loadingMessage && <div className="loading-note">{loadingMessage}</div>}

      {revealedHints.length > 0 && (
        <div className="hint-box">
          <h3>Hints</h3>
          <ol>
            {revealedHints.map((h, idx) => <li key={idx}>{h}</li>)}
          </ol>
        </div>
      )}

      {completed && level.mode === 'teach' && (
        <div className="completion-banner">
          Great job learning! Take these coins!
          <button className="btn-success" onClick={onComplete}>Continue</button>
        </div>
      )}

      {completed && level.mode === 'challenge' && (
        <div className="completion-banner">
          Challenge Complete! {starsEarned} stars earned!
          <button className="btn-success" onClick={onComplete}>Continue</button>
        </div>
      )}

      {testResults.length > 0 && !completed && (
        <div className="test-results">
          <h3>Test Results</h3>
          {testResults.map((result, idx) => (
            <div key={idx} className={`test-case ${result.output === result.expected ? 'pass' : 'fail'}`}>
              <p><strong>Test {idx + 1}:</strong></p>
              <pre>Expected: {result.expected}</pre>
              <pre>Got: {result.output}</pre>
            </div>
          ))}
        </div>
      )}

      {error && <div className="error-box">{error}</div>}
      {output && !error && testResults.length === 0 && <div className="output-box">{output}</div>}
    </div>
  );
}
