import {Player} from "./drawModels/player.js";
import {GAME_CONFIG} from "./config.js";

let frameNumber = 0;
let player1;
let player2;

initGame();
setInterval(gameTick, 1000 / GAME_CONFIG.fps);

function initGame() {
  // TODO: Init HTML view
  const gameZoneEl = document.getElementById(GAME_CONFIG.gameZoneId);

  const gameZone = {
    width: gameZoneEl.getBoundingClientRect().width,
    height: gameZoneEl.getBoundingClientRect().height,
  };
  
  // TODO: Init Players, ask their names via alert for the begin, later using forms
  player1 = new Player(gameZoneEl, 50, 50, "", 120, "Игрок 1");

  player2 = new Player(
    gameZoneEl,
    gameZone.width - 50,
    gameZone.height - 50,
    "",
    300,
    "Игрок 2"
  );
}

function gameTick() {
  frameNumber++;
  
  // Запускаем пересчеты расположения
  player1.move(2, 1);
  player2.move(-3, 0);

  
  // Перерисовывуем объекты на поле игры
  player1.redraw();
  player2.redraw();

  console.log(frameNumber, {
    player1,
    player2
  })
}
