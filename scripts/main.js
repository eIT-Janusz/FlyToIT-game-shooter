import {Player} from "./drawModels/player.js";
import {Bullet} from "./drawModels/bullet.js";
import {prepareKeys, handleKeysClicked} from "./keys.js";
import {GAME_CONFIG} from "./config.js";

let frameNumber = 0;
let player1;
let player2;

initGame();
setInterval(gameTick, 1000 / GAME_CONFIG.fps);

function initGame() {
  // TODO: Реализовать начальный запуск и настройки игры
  const gameZoneEl = document.getElementById(GAME_CONFIG.gameZoneId);

  const gameZone = {
    width: gameZoneEl.getBoundingClientRect().width,
    height: gameZoneEl.getBoundingClientRect().height,
  };
  console.log(gameZone.height, gameZone.width);
  // TODO: При создании игрока запросить его имя с помощью prompt, в дальнейшем красивой формы
  player1 = new Player(
    gameZoneEl,
    50,
    gameZone.height - 50,
    "/images/cowboyLookingRight.png",
    120,
    "Игрок 1"
  );

  player2 = new Player(
    gameZoneEl,
    gameZone.width - 50,
    50,
    "/images/cowboyLookingLeft.png",
    300,
    "Игрок 2"
  );

  prepareKeys(player1, player2);
}

function gameTick() {
  frameNumber++;

  handleKeysClicked();

  // Запускаем пересчеты расположения
  player1.move(3, -2);
  player2.move(-3, 1);

  // Перерисовывуем объекты на поле игры
  player1.redraw();
  player2.redraw();

  console.log(frameNumber, {
    player1S: player1.speed,
    player2S: player2.speed,
    player1R: player1.rotation,
    player2R: player2.rotation,
  });
}
function newBulletFirstPlayer() {
  nextBullet = new Bullet(
    gameZoneEl,
    player1.xPos,
    player1.yPos,
    "/images/bullet.png",
    player1.rotation
  );
  return nextBullet;
}
function newBulletSecondPlayer() {
  nextBullet = new Bullet(
    gameZoneEl,
    player2.xPos,
    player2.yPos,
    "/images/bullet.png",
    player2.rotation
  );
  return nextBullet;
}
