import {DrawObject} from "./drawObjects.js";

const BULLET_CONFIG = {
  initialSpeed: 60,
};

export class Bullet extends DrawObject {
  /**
   * Объект игрока
   * @extends DrawObject
   * @constructor
   * @param {HTMLElement} gameZoneEl Элемент HTML в рамках которого продолжается игра
   * @param {number} initialXPos Началное положение пули на горизонтальной оси X
   * @param {number} initialYPos Началное положение пули на вертикальной оси Y
   * @param {string} imageSrc Ссылка на изображение пули - должно быть правильным значением атрибута src тега img
   * @param {number} initialRotataion Направление пули - градиус, 0 это вверх, 90 в право...
   */
  constructor(
    gameZoneEl,
    initialXPos,
    initialYPos,
    imageSrc,
    initialRotataion
  ) {
    super(
      gameZoneEl,
      initialXPos,
      initialYPos,
      imageSrc,
      "bullet",
      initialRotataion,
      BULLET_CONFIG.initialSpeed,
      BULLET_CONFIG.initialSpeed
    );
  }
}
