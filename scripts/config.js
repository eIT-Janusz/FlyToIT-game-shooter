
export const GAME_CONFIG = {
  gameZoneId: "game-zone",
  fps: 1, // кадровая частота, для разработки удобнее 1, конечное желаемое значение это 50
};

export const PLAYER_CONFIG = {
  initialSpeed: 20 / GAME_CONFIG.fps,
};

export const BULLET_CONFIG = {
  initialSpeed: 60 / GAME_CONFIG.fps,
};