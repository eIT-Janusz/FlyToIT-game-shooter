import {Player} from "./drawModels/player.js";

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
  console.log(gameZone.height, gameZone.width);
  // TODO: При создании игрока запросить его имя с помощью prompt, в дальнейшем красивой формы
  player1 = new Player(
    gameZoneEl,
    50,
    gameZone.height - 50,
    " ../../images/cowboyLookingRight.png",
    120,
    "first_player",
    "Игрок 1"
  );

  player2 = new Player(
    gameZoneEl,
    gameZone.width - 50,
    50,
    "../../images/cowboyLookingLeft.png",
    300,
    "second_player",
    "Игрок 2"
  );
}
const firstPlayer = document.getElementById("first_player");
const secondPlayer = document.getElementById("second_player");
firstPlayer.classList.add("player");
secondPlayer.classList.add("player");
function gameTick() {
  frameNumber++;

  // Запускаем пересчеты расположения
  player1.move(3, -2);
  player2.move(-3, 1);

  // Перерисовывуем объекты на поле игры
  player1.redraw();
  player2.redraw();

  console.log(frameNumber, {
    player1,
    player2,
  });
}
