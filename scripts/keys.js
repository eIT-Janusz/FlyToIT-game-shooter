const keysClicked = [];
let KEY_SINGLE_ACTION_MAP;
let KEY_PENDING_ACTION_MAP;

function prepareActionMap(player1, player2) {
  // Список одноразовых событии, как выстрел
  KEY_SINGLE_ACTION_MAP = {
    W: () => player2.run(),
    Ц: () => player2.run(),
    S: () => player2.stop(),
    Ы: () => player2.stop(),
    ARROWUP: () => player1.run(),
    ARROWDOWN: () => player1.stop(),
  };
  
  // длительных событии как бесконечный поворот
  KEY_PENDING_ACTION_MAP = {};
}

export function handleKeysClicked() {
  Object.entries(KEY_PENDING_ACTION_MAP).forEach(([key, action]) => {
    const isKeyClicked =
      keysClicked.findIndex((keyClicked) => keyClicked.toUpperCase() === key) >
      -1;

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
      (keyIndex = keysClicked.findIndex((key) => key === event.key)) > -1
    ) {
      keysClicked.splice(keyIndex, 1);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.repeat) return;

    if (KEY_SINGLE_ACTION_MAP[event.key.toUpperCase()]) {
      KEY_SINGLE_ACTION_MAP[event.key.toUpperCase()]();
    }
    keysClicked.push(event.key);
  });
}
