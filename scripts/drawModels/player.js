import {DrawObject} from "./drawObjects.js";

const PLAYER_CONFIG = {
  initialSpeed: 20,
};

/**
 * Объект игрока
 * @extends DrawObject
 * @constructor
 * @param {HTMLElement} gameZoneEl Элемент HTML в рамках которого продолжается игра
 * @param {number} initialXPos Началное положение объекта на оси X
 * @param {number} initialYPos Началное положение объекта на оси Y
 * @param {number} initialRotataion Направление объекта - градиус, 0 это вверх, 90 в право...
 * @param {string} imageSrc Ссылка на изображение игрока - должно быть правильным значением атрибута src тега img
 * @param {string} name Газвание итрока
 */
export class Player extends DrawObject {
  constructor(gameZoneEl, initialXPos, initialYPos, imageSrc, initialRotataion, name) {
    super(
      gameZoneEl,
      initialXPos,
      initialYPos,
      imageSrc,
      initialRotataion,
      0,
      PLAYER_CONFIG.initialSpeed
    );

    this.name = name;
    this.maxSpeed = PLAYER_CONFIG.initialSpeed;
    this.points = 0;
  }

  run() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
