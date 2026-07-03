import React from 'react';
import { spendCoins, addLives } from '../utils/gameState';
import './Shop.css';

export default function Shop({ progress, onClose, onUpdate }) {
  const buyLife = (amount, cost) => {
    if (spendCoins(cost)) {
      addLives(amount);
      onUpdate();
      alert(`+${amount} ${amount === 1 ? 'life' : 'lives'}!`);
    } else {
      alert('Not enough coins!');
    }
  };

  return (
    <div className="shop-overlay" onClick={onClose}>
      <div className="shop-modal" onClick={e => e.stopPropagation()}>
        <h2>CodeQuest Shop</h2>
        <p>Coins: {progress.coins || 0}</p>
        <p className="shop-note">Hints are always free during Practice - use them as often as you like.</p>
        <div className="shop-items">
          <div className="shop-item">
            <span>Extra Life</span>
            <button className="btn-primary" onClick={() => buyLife(1, 20)}>Buy for 20 coins</button>
          </div>
          <div className="shop-item">
            <span>3 Lives Bundle</span>
            <button className="btn-primary" onClick={() => buyLife(3, 50)}>Buy for 50 coins</button>
          </div>
        </div>
        <button className="btn-danger" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
