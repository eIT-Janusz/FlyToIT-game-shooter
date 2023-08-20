import {DrawObject} from "./drawObjects.js";
import {BULLET_CONFIG} from "../config.js";

export class Bullet extends DrawObject {
  /**
   * Объект пули
   * @extends DrawObject
   * @constructor
   * @param {HTMLElement} gameZoneEl Элемент HTML в рамках которого продолжается игра
   * @param {number} initialXPos Началное положение пули на горизонтальной оси X
   * @param {number} initialYPos Началное положение пули на вертикальной оси Y
   * @param {string} imageSrc Ссылка на изображение пули - должно быть правильным значением атрибута src тега img
   * @param {number} initialRotataion Направление пули - градиус, 0 это вверх, 90 в право...
   */
  constructor(gameZoneEl, initialXPos, initialYPos, initialRotataion) {
    super(
      gameZoneEl,
      initialXPos,
      initialYPos,
      "/images/bullet.png",
      "bullet",
      initialRotataion,
      BULLET_CONFIG.speed
    );
    this.redraw();
  }
}
