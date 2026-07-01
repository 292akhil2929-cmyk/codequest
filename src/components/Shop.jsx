import React from 'react';
import { spendCoins, addLives } from '../utils/gameState';
import './Shop.css';

export default function Shop({ progress, onClose, onUpdate }) {
  const buyLife = () => {
    if (spendCoins(20)) {
      addLives(1);
      onUpdate();
      alert('+1 life!');
    } else {
      alert('Not enough coins!');
    }
  };

  const buyHintPack = () => {
    alert('Hint packs coming soon!');
  };

  return (
    <div className="shop-overlay" onClick={onClose}>
      <div className="shop-modal" onClick={e => e.stopPropagation()}>
        <h2>CodeQuest Shop</h2>
        <p>Coins: {progress.coins || 0}</p>
        <div className="shop-items">
          <div className="shop-item">
            <span>Extra Life</span>
            <button className="btn-primary" onClick={buyLife}>Buy for 20 coins</button>
          </div>
          <div className="shop-item">
            <span>Hint Pack (3 hints)</span>
            <button className="btn-primary" onClick={buyHintPack}>Buy for 30 coins</button>
          </div>
        </div>
        <button className="btn-danger" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
