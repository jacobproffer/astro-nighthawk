// Global type definitions for the game

interface GameAPI {
  gameStarted?: boolean;
  playerCanMove?: boolean;
  missilesActive?: boolean;
  restart?: () => void;
  showStartMenu?: () => void;
  missiles?: {
    distanceTo: (missileIndex: number, x: number, y: number) => number;
    explode: (index: number) => void;
    changeSpeed: () => void;
    getSpeed: () => number;
    setSpeed: (speed: number) => void;
    resetSpeed: () => void;
    resetMissile: (index: number) => void;
    restartGame: () => void;
    getMissilePosition: (index: number) => {
      x: number;
      y: number;
      onScreen: boolean;
    } | null;
    getMissileCount: () => number;
    setOnMissileReachedBottom: (callback: (index: number) => void) => void;
  };
  nighthawk?: {
    reset: () => void;
    getNighthawkPosition: () => { x: number; y: number };
  };
}

interface Window {
  gameAPI?: GameAPI;
}
