import {degToRadians} from "../someMath.js";
import {gameZoneEl, gameZone} from "../main.js";
export class DrawObject {
  /**
   * Общий объект который может быть размщенным в зоне игры
   * @constructor
   * @param {HTMLElement} gameZoneEl Элемент HTML  в рамках которого продолжается игра
   * @param {number} initialXPos Началное положение объекта на горизонтальной оси X
   * @param {number} initialYPos Началное положение объекта на вертикальной оси Y
   * @param {string} imageSrc Ссылка на изображение объекта - должно быть правильным значением атрибута src тега img
   * @param {number} initialRotataion Направление объекта - градиус, 0 это вверх, 90 в право...
   * @param {number} initialSpeed Начальная скорость перемещения объекта
   */
  constructor(
    gameZoneEl,
    initialXPos,
    initialYPos,
    imageSrc,
    elClass,
    initialRotataion,
    initialSpeed,
    radius
  ) {
    this.xPos = initialXPos;
    this.yPos = initialYPos;
    this.rotation = initialRotataion;
    this.el = this.createHTMLElement(gameZoneEl, imageSrc, elClass);
    this.gameZoneEl = gameZoneEl;
    this.gameZoneWidth = gameZone.width;
    this.gameZoneHeight = gameZone.height;
    this.speed = initialSpeed;
    this.radius = radius;
  }

  createHTMLElement(gameZoneEl, imageSrc, elClass) {
    const el = document.createElement("img");
    el.src = imageSrc;
    el.className = elClass;
    gameZoneEl.append(el);
    return el;
  }
  getHTMLElement() {
    return this.el;
  }

  moveHelper(movingPeculiarity) {
    this.xPos += Math.cos(degToRadians(-(this.rotation - 90))) * this.speed;
    this.yPos += Math.sin(degToRadians(-(this.rotation - 90))) * this.speed;
    if (
      this.xPos <= this.radius ||
      this.xPos >= this.gameZoneHeight - this.radius ||
      this.yPos <= this.radius ||
      this.yPos >= this.gameZoneWidth - this.radius
    ) {
      movingPeculiarity();
    }
  }
  move() {
    this.moveHelper(() => {
      this.speed = 0;
    });
  }
  redraw() {
    this.el.style.left = this.xPos + "px";
    this.el.style.bottom = this.yPos + "px";
    this.el.style.transform =
      "translateX(-50%) translateY(50%) rotate(" + this.rotation + "deg)";
  }
}
