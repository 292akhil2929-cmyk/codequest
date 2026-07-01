import React, { useState } from 'react';
import { levels } from '../utils/levels';
import './WorldMap.css';

function groupByTopic(levelList) {
  const groups = [];
  const index = {};
  for (const level of levelList) {
    const key = level.topic || 'Misc';
    if (!(key in index)) {
      index[key] = groups.length;
      groups.push({ topic: key, levels: [] });
    }
    groups[index[key]].levels.push(level);
  }
  return groups;
}

export default function WorldMap({ progress, onSelectLevel }) {
  const unlocked = progress.unlocked || [];
  const completed = progress.completed || {};
  const [collapsed, setCollapsed] = useState({});

  const teachLevels = levels.filter(l => l.mode === 'teach');
  const challengeLevels = levels.filter(l => l.mode === 'challenge');

  const toggle = (key) => setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));

  const renderLevelNode = (level) => {
    const isUnlocked = unlocked.includes(level.id);
    const levelComplete = completed[level.id];
    return (
      <button
        key={level.id}
        className={`level-node ${isUnlocked ? 'unlocked' : 'locked'} ${levelComplete ? 'completed' : ''}`}
        disabled={!isUnlocked}
        onClick={() => onSelectLevel(level.id)}
      >
        <span className="level-icon">{levelComplete ? 'DONE' : isUnlocked ? (level.mode === 'teach' ? 'LEARN' : 'FIGHT') : 'LOCK'}</span>
        <span className="level-title">{level.title}</span>
        {levelComplete && <span className="stars">{'*'.repeat(levelComplete.stars || 0)}</span>}
      </button>
    );
  };

  const renderSection = (title, levelList, prefix) => {
    const groups = groupByTopic(levelList);
    return (
      <div className="world-section">
        <h2>{title}</h2>
        {groups.map(group => {
          const key = prefix + ':' + group.topic;
          const doneCount = group.levels.filter(l => completed[l.id]).length;
          const isCollapsed = collapsed[key];
          return (
            <div className="topic-group" key={key}>
              <button className="topic-header" onClick={() => toggle(key)}>
                <span>{isCollapsed ? '+' : '-'} {group.topic}</span>
                <span className="topic-progress">{doneCount}/{group.levels.length}</span>
              </button>
              {!isCollapsed && (
                <div className="level-grid">{group.levels.map(renderLevelNode)}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="world-map">
      {renderSection('Learn Tower (Python Basics)', teachLevels, 'teach')}
      {renderSection('Challenge Tower (Python + 150 DSA Questions)', challengeLevels, 'challenge')}
    </div>
  );
}
