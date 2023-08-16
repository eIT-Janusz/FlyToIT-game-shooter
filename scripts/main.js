import {Player} from "./drawModels/player.js";
import {prepareKeys, handleKeysClicked} from "./keys.js";

const GAME_CONFIG = {
  gameZoneId: "game-zone",
  fps: 1, // кадровая частота, для разработки удобнее 1, конечное желаемое значение это 50
};
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

  // TODO: При создании игрока запросить его имя с помощью prompt, в дальнейшем красивой формы
  player1 = new Player(gameZoneEl, 50, 50, "", 120, "Игрок 1");

  player2 = new Player(
    gameZoneEl,
    gameZone.width - 50,
    gameZone.height - 50,
    "",
    300,
    "Игрок 2"
  );

  prepareKeys(player1, player2);
}

function gameTick() {
  frameNumber++;

  handleKeysClicked();

  // Запускаем пересчеты расположения
  player1.move(2, 1);
  player2.move(-3, 0);

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
