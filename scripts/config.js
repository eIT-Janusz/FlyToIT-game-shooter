export const GAME_CONFIG = {
  gameZoneId: "game-zone",
  fps: 50, // кадров в секунду. Кадровая частота, для разработки удобнее 1, конечное желаемое значение это 50
  isPause: false,
};

export const PLAYER_CONFIG = {
  maxSpeed: 40 / GAME_CONFIG.fps, // 40 пикселей в секунду
  rotationSpeed: 50 / GAME_CONFIG.fps, // 50 градусов в секунду
};

export const BULLET_CONFIG = {
  speed: 500 / GAME_CONFIG.fps, // 500 пикселей в секунду
};
