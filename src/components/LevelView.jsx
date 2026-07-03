import React, { useState, useEffect } from 'react';
import { getLevelById, levels } from '../utils/levels';
import { completeLevel, unlockNextLevels, loseLife, addCoins } from '../utils/gameState';
import CodeEditor from './CodeEditor';
import { runCode } from '../utils/pyodide';
import './LevelView.css';

function useLoadingNote(active) {
  const [note, setNote] = useState('');
  useEffect(() => {
    if (!active) { setNote(''); return; }
    const t = setTimeout(() => setNote('First run can take up to 30s while the Python runtime loads...'), 4000);
    return () => clearTimeout(t);
  }, [active]);
  return note;
}

function TheoryExample({ level }) {
  const [code, setCode] = useState(level.starterCode || '');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(false);
  const loadingNote = useLoadingNote(running);

  const run = async () => {
    setRunning(true);
    setError(null);
    setOutput('');
    try {
      const results = await runCode(code, []);
      setOutput(results.length > 0 ? results[0].output : 'Code executed successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="example-box">
      <h3>Try the Example</h3>
      <p className="example-hint">Edit it if you like, then run it to see exactly what it does.</p>
      <div className="editor-container small"><CodeEditor value={code} onChange={setCode} /></div>
      <button className="btn-primary" onClick={run} disabled={running}>
        {running ? 'Running...' : 'Run Example'}
      </button>
      {loadingNote && <div className="loading-note">{loadingNote}</div>}
      {error && <div className="error-box">{error}</div>}
      {output && !error && <div className="output-box">{output}</div>}
    </div>
  );
}

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
      <TheoryExample key={level.id} level={level} />
    </>
  );
}

function ResultPanel({ testResults, output, error }) {
  return (
    <>
      {testResults.length > 0 && (
        <div className="test-results">
          <h3>Test Results</h3>
          {testResults.map((result, idx) => (
            <div key={idx} className={`test-case ${result.output === result.expected ? 'pass' : 'fail'}`}>
              <p><strong>Test {idx + 1}:</strong> {result.output === result.expected ? 'Passed' : 'Failed'}</p>
              <pre>Expected: {result.expected}</pre>
              <pre>Got: {result.output}</pre>
            </div>
          ))}
        </div>
      )}
      {error && <div className="error-box">{error}</div>}
      {output && !error && testResults.length === 0 && <div className="output-box">{output}</div>}
    </>
  );
}

export default function LevelView({ levelId, onBack, onComplete, playSuccess, playFail }) {
  const level = getLevelById(levelId);
  const theoryLevel = level && level.mode === 'challenge'
    ? levels.find(l => l.mode === 'teach' && l.topic === level.topic)
    : null;

  const [code, setCode] = useState(level?.starterCode || '');
  const [revealedHints, setRevealedHints] = useState([]);
  const [starsEarned, setStarsEarned] = useState(0);
  const [completed, setCompleted] = useState(false);

  const [teachOutput, setTeachOutput] = useState('');
  const [teachError, setTeachError] = useState(null);
  const [teachRunning, setTeachRunning] = useState(false);
  const teachLoadingNote = useLoadingNote(teachRunning);

  const [practiceResults, setPracticeResults] = useState([]);
  const [practiceOutput, setPracticeOutput] = useState('');
  const [practiceError, setPracticeError] = useState(null);
  const [practiceRunning, setPracticeRunning] = useState(false);
  const [practiceAttempted, setPracticeAttempted] = useState(false);
  const [practiceAllPassed, setPracticeAllPassed] = useState(false);
  const practiceLoadingNote = useLoadingNote(practiceRunning);

  const [quizResults, setQuizResults] = useState([]);
  const [quizOutput, setQuizOutput] = useState('');
  const [quizError, setQuizError] = useState(null);
  const [quizRunning, setQuizRunning] = useState(false);
  const quizLoadingNote = useLoadingNote(quizRunning);

  if (!level) return <div>Level not found</div>;

  const handleTeachRun = async () => {
    setTeachRunning(true);
    setTeachError(null);
    setTeachOutput('');
    try {
      const results = await runCode(code, []);
      setTeachOutput(results.length > 0 ? results[0].output : 'Code executed successfully!');
      if (!completed) {
        completeLevel(level.id, 1, level.xpReward || 0);
        unlockNextLevels(level.id, levels);
        addCoins(5);
      }
      setCompleted(true);
      playSuccess();
    } catch (err) {
      setTeachError(err.message);
      playFail();
    } finally {
      setTeachRunning(false);
    }
  };

  const handlePractice = async () => {
    setPracticeRunning(true);
    setPracticeError(null);
    setPracticeOutput('');
    setPracticeResults([]);
    try {
      const results = await runCode(code, level.testCases);
      setPracticeResults(results);
      const allPassed = results.every(r => r.output === r.expected);
      setPracticeAttempted(true);
      setPracticeAllPassed(allPassed);
      if (!allPassed) setPracticeOutput('Not quite yet - compare Expected vs Got below, then try again. Practice runs are free, no lives lost.');
    } catch (err) {
      setPracticeError(err.message);
      setPracticeAttempted(true);
      setPracticeAllPassed(false);
    } finally {
      setPracticeRunning(false);
    }
  };

  const handleQuizSubmit = async () => {
    setQuizRunning(true);
    setQuizError(null);
    setQuizOutput('');
    setQuizResults([]);
    try {
      const results = await runCode(code, level.testCases);
      setQuizResults(results);
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
        setQuizOutput('Some tests failed. Check the differences below.');
        loseLife();
        playFail();
      }
    } catch (err) {
      setQuizError(err.message);
      loseLife();
      playFail();
    } finally {
      setQuizRunning(false);
    }
  };

  const handleHint = () => {
    if (revealedHints.length < level.hints.length) {
      setRevealedHints([...revealedHints, level.hints[revealedHints.length]]);
    }
  };

  const hintsRemaining = level.hints.length - revealedHints.length;

  if (level.mode === 'teach') {
    return (
      <div className="level-view">
        <button onClick={onBack} className="btn-back">Back to Map</button>
        <div className="level-header">
          <span className="mode-badge">Learn</span>
          <span className="topic-badge">{level.topic}</span>
          <h2>{level.title}</h2>
        </div>
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
        <div className="editor-container"><CodeEditor value={code} onChange={setCode} /></div>
        <div className="controls">
          <button className="btn-primary" onClick={handleTeachRun} disabled={teachRunning}>
            {teachRunning ? 'Running...' : 'Run'}
          </button>
        </div>
        {teachLoadingNote && <div className="loading-note">{teachLoadingNote}</div>}
        {completed && (
          <div className="completion-banner">
            Great job learning! Take these coins!
            <button className="btn-success" onClick={onComplete}>Continue</button>
          </div>
        )}
        {teachError && <div className="error-box">{teachError}</div>}
        {teachOutput && !teachError && <div className="output-box">{teachOutput}</div>}
      </div>
    );
  }

  return (
    <div className="level-view">
      <button onClick={onBack} className="btn-back">Back to Map</button>
      <div className="level-header">
        <span className="mode-badge">Challenge</span>
        <span className="topic-badge">{level.topic}</span>
        <h2>{level.title}</h2>
      </div>

      <h3 className="section-label">1. Theory</h3>
      {theoryLevel ? <TheoryBlock level={theoryLevel} /> : (
        <div className="story-box"><p>{level.story}</p></div>
      )}

      <h3 className="section-label">2. Practice</h3>
      <p className="stage-note">Try it as many times as you want. No lives lost, no rewards yet - just feedback on what's right or wrong.</p>
      <div className="story-box"><p>{level.story}</p></div>
      <div className="editor-container"><CodeEditor value={code} onChange={setCode} /></div>
      <div className="controls">
        <button className="btn-primary" onClick={handlePractice} disabled={practiceRunning}>
          {practiceRunning ? 'Running...' : 'Try It'}
        </button>
        {level.hints.length > 0 && (
          <button className="btn-secondary" onClick={handleHint} disabled={hintsRemaining === 0}>
            {hintsRemaining === 0 ? 'No hints left' : `Show Hint (${hintsRemaining} left)`}
          </button>
        )}
      </div>
      {practiceLoadingNote && <div className="loading-note">{practiceLoadingNote}</div>}
      {revealedHints.length > 0 && (
        <div className="hint-box">
          <h3>Hints</h3>
          <ol>
            {revealedHints.map((h, idx) => <li key={idx}>{h}</li>)}
          </ol>
        </div>
      )}
      <ResultPanel testResults={practiceResults} output={practiceOutput} error={practiceError} />
      {practiceAttempted && practiceAllPassed && (
        <div className="ready-banner">All tests passed in practice! Scroll down and submit the quiz to lock in your reward.</div>
      )}

      {!completed && (
        <>
          <h3 className="section-label">3. Quiz</h3>
          <p className="stage-note">This is the real attempt: a wrong submission costs a life, a correct one earns coins, XP, and unlocks the next topic.</p>
          <div className="controls">
            <button className="btn-success" onClick={handleQuizSubmit} disabled={quizRunning}>
              {quizRunning ? 'Submitting...' : 'Submit Quiz'}
            </button>
          </div>
          {quizLoadingNote && <div className="loading-note">{quizLoadingNote}</div>}
          <ResultPanel testResults={quizResults} output={quizOutput} error={quizError} />
        </>
      )}

      {completed && (
        <div className="completion-banner">
          Challenge Complete! {starsEarned} stars earned!
          <button className="btn-success" onClick={onComplete}>Continue</button>
        </div>
      )}
    </div>
  );
}
