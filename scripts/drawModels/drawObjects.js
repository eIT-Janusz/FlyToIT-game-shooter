var gameZoneEl = document.getElementById("game-zone");

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
   * @param {number} maxSpeed Максимальная скорость перемещения объекта
   * @param {number} elementId Id созданного объекта
   */
  constructor(
    gameZoneEl,
    initialXPos,
    initialYPos,
    imageSrc,
    initialRotataion,
    elementId,
    initialSpeed,
    maxSpeed
  ) {
    this.xPos = initialXPos;
    this.yPos = initialYPos;
    this.rotation = initialRotataion;
    this.el = this.createHTMLElement(gameZoneEl, imageSrc, elementId);
    this.speed = initialSpeed;
    this.maxSpeed = maxSpeed;
  }

  // TO BE IMPLEMENTED
  createHTMLElement(gameZoneEl, imageSrc, elementId) {
    const el = document.createElement("img");
    el.src = imageSrc;
    el.id = elementId;
    gameZoneEl.append(el);
    return el;
  }

  // TO BE IMPLEMENTED
  move(xChange, yChange) {
    this.xPos += xChange;
    this.yPos += yChange;
  }

  redraw() {
    this.el.style.left = this.xPos + "px";
    this.el.style.bottom = this.yPos + "px";
  }
}
