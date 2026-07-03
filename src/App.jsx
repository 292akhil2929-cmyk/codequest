import React, { useState, useEffect } from 'react';
import WorldMap from './components/WorldMap';
import LevelView from './components/LevelView';
import Shop from './components/Shop';
import Certificate from './components/Certificate';
import { getProgress, initProgress, repairUnlocks, calculateTotalXP, getPlayerName, setPlayerName } from './utils/gameState';
import { levels } from './utils/levels';
import useSound from './hooks/useSound';
import './App.css';

export default function App() {
  const [view, setView] = useState('map');
  const [currentLevelId, setCurrentLevelId] = useState(null);
  const [progress, setProgress] = useState(getProgress());
  const [playerName, setPlayerNameState] = useState(getPlayerName());
  const [showShop, setShowShop] = useState(false);
  const playSuccess = useSound('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3');
  const playFail = useSound('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');

  useEffect(() => {
    initProgress();
    repairUnlocks(levels);
    refreshProgress();
  }, []);

  const refreshProgress = () => {
    setProgress(getProgress());
    setPlayerNameState(getPlayerName());
  };

  const goToLevel = (id) => { setCurrentLevelId(id); setView('level'); };
  const goToMap = () => { refreshProgress(); setView('map'); };
  const goToCertificate = () => {
    if (!playerName.trim()) {
      const name = prompt('Enter your name for the certificate:');
      if (name && name.trim()) {
        setPlayerName(name.trim());
        setPlayerNameState(name.trim());
      } else return;
    }
    setView('certificate');
  };

  const totalXP = calculateTotalXP(progress);
  const finalExamDone = progress.completed['dsa_final_exam'];

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={goToMap} className="logo">CodeQuest</h1>
        <div className="player-stats">
          <span className="stat-badge">XP {totalXP}</span>
          <span className="stat-badge">Coins {progress.coins || 0}</span>
          <span className="stat-badge">Lives {progress.lives ?? 5}</span>
          <button className="shop-btn" onClick={() => setShowShop(!showShop)}>Shop</button>
        </div>
      </header>
      <main>
        {view === 'map' && (
          <>
            <WorldMap progress={progress} onSelectLevel={goToLevel} />
            {finalExamDone && (
              <div className="certificate-unlock">
                <p>You have conquered the Algorithmic Kingdom!</p>
                <button className="btn-primary" onClick={goToCertificate}>Get Your Certificate</button>
              </div>
            )}
          </>
        )}
        {view === 'level' && (
          <LevelView
            levelId={currentLevelId}
            onBack={goToMap}
            onComplete={() => { refreshProgress(); goToMap(); }}
            playSuccess={playSuccess}
            playFail={playFail}
          />
        )}
        {view === 'certificate' && (
          <Certificate playerName={playerName} progress={progress} totalXP={totalXP} onClose={() => setView('map')} />
        )}
        {showShop && (
          <Shop progress={progress} onClose={() => setShowShop(false)} onUpdate={refreshProgress} />
        )}
      </main>
    </div>
  );
}
