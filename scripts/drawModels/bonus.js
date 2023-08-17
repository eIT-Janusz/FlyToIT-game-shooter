import {DrawObject} from "./drawObjects.js";

const BONUS_CONFIG = {
  speed_up: 2,
};

export class Bonus extends DrawObject {
  constructor(gameZoneEl, initialXPos, initialYPos, image, initialRotataion, bonusType) {
    super(gameZoneEl, initialXPos, initialYPos, image, initialRotataion, 0);

    this.bonusType = bonusType;
  }

  applyBonus(player) {
    switch (this.bonusType) {
      case "speed_up":
        player.maxSpeed += BONUS_CONFIG.speed_up;
        break;
    }
  }
}
