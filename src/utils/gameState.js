const STORAGE_KEY = 'codequest_progress';
const NAME_KEY = 'codequest_player_name';

const defaultProgress = {
  completed: {},
  xp: 0,
  coins: 100,
  lives: 5,
  unlocked: ['py_hello_teach'],
  hintsPurchased: {},
};

export function initProgress() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
  }
}

export function getProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultProgress;
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function completeLevel(levelId, stars, xpReward) {
  const progress = getProgress();
  if (!progress.completed[levelId]) {
    progress.completed[levelId] = { stars, attempts: 1 };
    progress.xp += xpReward;
  } else {
    const prev = progress.completed[levelId];
    if (stars > prev.stars) progress.completed[levelId].stars = stars;
    progress.completed[levelId].attempts++;
  }
  saveProgress(progress);
}

export function unlockNextLevels(levelId, levels) {
  const progress = getProgress();
  const current = levels.find(l => l.id === levelId);
  if (current && current.unlocks) {
    current.unlocks.forEach(nextId => {
      if (!progress.unlocked.includes(nextId)) {
        progress.unlocked.push(nextId);
      }
    });
    saveProgress(progress);
  }
}

// Self-healing pass, run once on every app load: any level already marked
// completed should always have its unlocks present in progress.unlocked.
// This guarantees a player can never end up stuck with a finished level
// whose next step never opened, regardless of what caused the gap (an old
// cached build, an interrupted session, a future bug we haven't found yet).
export function repairUnlocks(levels) {
  const progress = getProgress();
  const byId = {};
  levels.forEach(l => { byId[l.id] = l; });
  let changed = false;
  Object.keys(progress.completed).forEach(id => {
    const lvl = byId[id];
    if (lvl && lvl.unlocks) {
      lvl.unlocks.forEach(nextId => {
        if (!progress.unlocked.includes(nextId)) {
          progress.unlocked.push(nextId);
          changed = true;
        }
      });
    }
  });
  if (changed) saveProgress(progress);
  return changed;
}

export function calculateTotalXP(progress) {
  return progress.xp;
}

export function loseLife() {
  const p = getProgress();
  p.lives = Math.max(0, p.lives - 1);
  saveProgress(p);
}

export function addCoins(amount) {
  const p = getProgress();
  p.coins += amount;
  saveProgress(p);
}

export function spendCoins(amount) {
  const p = getProgress();
  if (p.coins >= amount) {
    p.coins -= amount;
    saveProgress(p);
    return true;
  }
  return false;
}

export function addLives(amount) {
  const p = getProgress();
  p.lives += amount;
  saveProgress(p);
}

export function getPlayerName() {
  return localStorage.getItem(NAME_KEY) || '';
}

export function setPlayerName(name) {
  localStorage.setItem(NAME_KEY, name);
}
