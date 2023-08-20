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
   * @param {string} name Название игрока
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
      "player",
      initialRotataion,
      0
    );

    this.name = name;
    this.maxSpeed = PLAYER_CONFIG.maxSpeed;
    this.points = 0;

    this.redraw();
  }

  run(moovingCoeficient) {
    this.speed = this.maxSpeed * moovingCoeficient;
  }

  stop() {
    this.speed = 0;
  }

  /**
   * @description Задаёт паправление поворота.
   * @param {number} rotationCoeficient Коефициент скорости поворота - умножается на базовую скорость поворота игрока. Положительные значения для поворота на право, отрицательные на лево. Меньше 1 для медленного поворота, больше 1 для быстрого
   */
  changeRotation(rotationCoeficient) {
    this.rotation += PLAYER_CONFIG.rotationSpeed * rotationCoeficient;
  }

  shoot() {
    const bullet = new Bullet();

    return bullet;
  }
}
