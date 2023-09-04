import {gameZone} from "../main.js";
import {DrawObject} from "./drawObjects.js";
const BONUS_CONFIG = {
  speed_up: 2,
};

export class Bonus extends DrawObject {
  constructor(gameZoneEl, imageSrc, bonusType) {
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
const xPosCalculation = () => {
  let horisonPos;
  do horisonPos = (gameZone.width + 1) * Math.random();
  while (horisonPos > gameZone.width);
  return horisonPos;
};
const yPosCalculation = () => {
  let verticalPos;
  do verticalPos = (gameZone.height + 1) * Math.random();
  while (verticalPos > gameZone.height);
  return verticalPos;
};
export const bonusTypesDetermination = () => {
  bonusTypes = ["speed_up", "faster_reloading"];
  const maxIndex = bonusTypes.length - 1;
  const chosenInd = Math.floor(Math.random() * maxIndex);
  return bonusTypes[chosenInd];
};
