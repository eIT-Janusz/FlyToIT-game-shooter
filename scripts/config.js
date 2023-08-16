
export const GAME_CONFIG = {
  gameZoneId: "game-zone",
  fps: 1, // кадров в секунду. Кадровая частота, для разработки удобнее 1, конечное желаемое значение это 50
};

export const PLAYER_CONFIG = {
  maxSpeed: 40 / GAME_CONFIG.fps, // 40 пикселей в секунду
  rotationSpeed: 30 / GAME_CONFIG.fps, // 30 градусов в секунду
};

export const BULLET_CONFIG = {
  speed: 120 / GAME_CONFIG.fps, // 120 пикселей в секунду
};