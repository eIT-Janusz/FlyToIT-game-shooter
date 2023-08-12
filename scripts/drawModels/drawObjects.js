/**
 * Общий объект который может быть размщенным в зоне игры
 * @param {HTMLElement} gameZoneEl Элемент HTML  в рамках которого продолжается игра
 * @param {number} initialXPos Initial X axis position of object
 * @param {number} initialYPos Direction of the player's view, degree. 0 is top, 90 is right...
 * @param {string} imageSrc Image's src to draw at objects position, must be a valid img's src attribute
 * @param {number} initialRotataion Direction of the object's view, degree. 0 is top, 90 is right...
 */
export class DrawObject {
  constructor(
    gameZoneEl,
    initialXPos,
    initialYPos,
    imageSrc,
    initialRotataion,
    initialSpeed,
    maxSpeed
  ) {
    this.xPos = initialXPos;
    this.yPos = initialYPos;
    this.rotation = initialRotataion;
    this.el = this.createHTMLElement(gameZoneEl, imageSrc);

    this.speed = initialSpeed;
    this.maxSpeed = maxSpeed;
  }

  // TO BE IMPLEMENTED use image
  createHTMLElement(gameZoneEl, imageSrc) {
    const el = document.createElement("img");
    el.src = imageSrc;
    gameZoneEl.append(el);
    return el;
  }

  // TO BE IMPLEMENTED use rotation
  move(xChange, yChange) {
    this.xPos += xChange;
    this.yPos += yChange;
  }

  redraw() {
    this.el.style.left = this.xPos;
    this.el.style.bottom = this.yPos;
  }
}
