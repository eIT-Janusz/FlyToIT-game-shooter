const keysClicked = [];
let KEY_SINGLE_ACTION_MAP;
let KEY_PENDING_ACTION_MAP;

/**
 *
 * @param {import("./drawModels/player.js").Player} player1
 * @param {import("./drawModels/player.js").Player} player2
 */
function prepareActionMap(player1, player2) {
  // Список одноразовых событий, как выстрел
  KEY_SINGLE_ACTION_MAP = {
    Space: () => player1.shoot(),
    KeyQ: () => player2.shoot(),
  };

  // список длительных событий, как бесконечный поворот
  KEY_PENDING_ACTION_MAP = {
    ArrowUp: () => player1.run(1),
    ArrowDown: () => player1.run(-1),
    ArrowRight: () => {
      player1.changeRotation(1);
    },
    ArrowLeft: () => {
      player1.changeRotation(-1);
    },
    KeyW: () => player2.run(1),
    KeyS: () => player2.run(-1),
    KeyD: () => {
      player2.changeRotation(1);
    },
    KeyA: () => {
      player2.changeRotation(-1);
    },
  };
}

export function handleKeysClicked() {
  Object.entries(KEY_PENDING_ACTION_MAP).forEach(([key, action]) => {
    const isKeyClicked =
      keysClicked.findIndex((keyClicked) => keyClicked === key) > -1;

    if (isKeyClicked) {
      action();
    }
  });
}

export function prepareKeys(player1, player2) {
  initKeys();
  prepareActionMap(player1, player2);
}

function initKeys() {
  document.addEventListener("keyup", (event) => {
    let keyIndex;
    // Sometimes it handled click twice, so we need to remove EACH remembered click
    while (
      (keyIndex = keysClicked.findIndex((key) => key === event.code)) > -1
    ) {
      keysClicked.splice(keyIndex, 1);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.repeat) return;

    if (KEY_SINGLE_ACTION_MAP[event.code]) {
      KEY_SINGLE_ACTION_MAP[event.code]();
    }
    keysClicked.push(event.code);
  });
}
