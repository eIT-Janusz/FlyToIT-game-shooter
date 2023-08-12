import {DrawObject} from "./drawObjects.js";

const BULLET_CONFIG = {
  initialSpeed: 60,
};

export class Bullet extends DrawObject {
  constructor(gameZoneEl, initialXPos, initialYPos, imageSrc, initialRotataion) {
    super(
      gameZoneEl,
      initialXPos,
      initialYPos,
      imageSrc,
      initialRotataion,
      BULLET_CONFIG.initialSpeed,
      BULLET_CONFIG.initialSpeed
    );
  }
}
