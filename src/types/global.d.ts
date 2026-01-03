// Global type definitions for the game

interface GameAPI {
  gameStarted?: boolean;
  playerCanMove?: boolean;
  missilesActive?: boolean;
  missiles?: {
    distanceTo: (missileIndex: number, x: number, y: number) => number;
    explode: (index: number) => void;
    changeSpeed: () => void;
    getSpeed: () => number;
    setSpeed: (speed: number) => void;
    resetSpeed: () => void;
    resetMissile: (index: number) => void;
    getMissilePosition: (index: number) => {
      x: number;
      y: number;
      onScreen: boolean;
    } | null;
    getMissileCount: () => number;
    setOnMissileReachedBottom: (callback: (index: number) => void) => void;
  };
}

interface Window {
  gameAPI?: GameAPI;
}
