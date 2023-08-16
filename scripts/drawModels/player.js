import {DrawObject} from "./drawObjects.js";
import {PLAYER_CONFIG} from "../config.js";

export class Player extends DrawObject {
  /**
   * Объект игрока
   * @extends DrawObject
   * @constructor
   * @param {HTMLElement} gameZoneEl Элемент HTML  в рамках которого продолжается игра
   * @param {number} initialXPos Началное положение игрока на горизонтальной оси X
   * @param {number} initialYPos Началное положение игрока на вертикальной оси Y
   * @param {string} imageSrc Ссылка на изображение игрока - должно быть правильным значением атрибута src тега img
   * @param {number} initialRotataion Направление игрока - градиус, 0 это вверх, 90 в право...
   * @param {string} name Название итрока
   */
  constructor(
    gameZoneEl,
    initialXPos,
    initialYPos,
    imageSrc,
    initialRotataion,
    name
  ) {
    super(
      gameZoneEl,
      initialXPos,
      initialYPos,
      imageSrc,
      initialRotataion,
      0
    );

    this.name = name;
    this.maxSpeed = PLAYER_CONFIG.maxSpeed;
    this.points = 0;
  }

  run() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
