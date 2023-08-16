import {DrawObject} from "./drawObjects.js";
import {BULLET_CONFIG} from "../config.js";

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
