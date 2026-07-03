import React from 'react';
import './Certificate.css';

export default function Certificate({ playerName, progress, totalXP, onClose }) {
  const completedCount = Object.keys(progress.completed || {}).length;
  const date = new Date().toLocaleDateString();
  return (
    <div className="cert-overlay" onClick={onClose}>
      <div className="cert-card" onClick={e => e.stopPropagation()}>
        <h1>Certificate of Completion</h1>
        <p className="cert-sub">CodeQuest: Python & Data Structures and Algorithms</p>
        <p className="cert-name">{playerName}</p>
        <p>has successfully completed {completedCount} {completedCount === 1 ? 'level' : 'levels'} and earned {totalXP} XP,</p>
        <p>demonstrating mastery of Python fundamentals and 150 core DSA problems.</p>
        <p className="cert-date">{date}</p>
        <button className="btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
