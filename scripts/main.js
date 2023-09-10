import {Player} from "./drawModels/player.js";
import {prepareKeys, handleKeysClicked} from "./keys.js";
import {GAME_CONFIG} from "./config.js";

let frameNumber = 0;
let player1;
let player2;
export const gameZoneEl = document.getElementById(GAME_CONFIG.gameZoneId);
export const gameZone = {
  width: gameZoneEl.getBoundingClientRect().width,
  height: gameZoneEl.getBoundingClientRect().height,
};
initGame();
setInterval(gameTick, 1000 / GAME_CONFIG.fps);

function initGame() {
  // TODO: Реализовать начальный запуск и настройки игры

  console.log(gameZone.height, gameZone.width);
  // TODO: При создании игрока запросить его имя с помощью prompt, в дальнейшем красивой формы
  player1 = new Player(
    gameZoneEl,
    50,
    gameZone.height - 50,
    "/images/zgiguli.png",
    135,
    "Игрок 1"
  );

  player2 = new Player(
    gameZoneEl,
    gameZone.width - 50,
    50,
    "/images/zgiguli.png",
    -45,
    "Игрок 2"
  );

  prepareKeys(player1, player2);
}

function gameTick() {
  if (GAME_CONFIG.isPause) {
    return;
  }
  frameNumber++;

  player1.bullets.forEach((bullet) => {
    bullet.move();
    bullet.redraw();
  });
  player2.bullets.forEach((bullet) => {
    bullet.move();
    bullet.redraw();
  });
  handleKeysClicked();

  // Запускаем пересчеты расположения
  player1.move();
  player2.move();

  // Перерисовывуем объекты на поле игры
  player1.redraw();
  player2.redraw();
  bulletThitControl();
}

function bulletThitControl() {
  player1.bullets.forEach((bullet) => {
    control(player2, bullet);
  });

  player2.bullets.forEach((bullet) => {
    control(player1, bullet);
  });
}
function control(player, bullet) {
  let xDistanceBulletPlayer = Math.abs(player.xPos - bullet.xPos);
  let yDistanceBulletPlayer = Math.abs(player.yPos - bullet.yPos);
  const distancesHypotenuse = Math.sqrt(
    Math.pow(xDistanceBulletPlayer, 2) + Math.pow(yDistanceBulletPlayer, 2)
  );
  if (distancesHypotenuse <= player.radius + bullet.radius) {
    console.log("Ты попал");
  }
}
