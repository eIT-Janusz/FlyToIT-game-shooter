import {gameZone} from "../main.js";
import {DrawObject} from "./drawObjects.js";
const BONUS_CONFIG = {
  speed_up: 2,
};
const xPosCalculation = () => {
  let horisonPos;
  horisonPos = (gameZone.width + 1) * Math.random();
  if (horisonPos > gameZone.width) {
    Math.floor(horisonPos);
  }
  return horisonPos;
};
const yPosCalculation = () => {
  let verticalPos;
  verticalPos = (gameZone.height + 1) * Math.random();
  if (verticalPos > gameZone.height) {
    Math.floor(verticalPos);
  }
  return verticalPos;
};

export class Bonus extends DrawObject {
  constructor(gameZoneEl, imageSrc) {
    super(
      gameZoneEl,
      xPosCalculation(),
      yPosCalculation(),
      imageSrc,
      "bonus",
      0,
      0,
      15
    );
    this.bonusType = this.bonusTypesDetermination();
  }

  applyBonus(player) {
    switch (this.bonusType) {
      case "speed_up":
        player.maxSpeed += BONUS_CONFIG.speed_up;
        break;
    }
  }
  bonusTypesDetermination() {
    bonusTypes = ["speed_up", "faster_reloading"];
    const maxIndex = bonusTypes.length - 1;
    const chosenInd = Math.floor(Math.random() * maxIndex);
    return bonusTypes[chosenInd];
  }
}
