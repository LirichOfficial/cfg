let animationTimer = null;
let animationIndex = 0;

const STATIC_ICONS = {
  connected: "assets/img/icon/icon_48.png",
  ready: "assets/img/icon/icon_BW_48.png",
  noConnection: "assets/img/icon/icon_error_48.png"
};

const SIGNAL_ICONS = [
  "assets/img/icon/signal/0.png",
  "assets/img/icon/signal/1.png",
  "assets/img/icon/signal/2.png",
  "assets/img/icon/signal/3.png"
];

function stopAnimation() {
  if (animationTimer) {
    clearInterval(animationTimer);
    animationTimer = null;
  }
}

function setStatic(path) {
  chrome.action.setIcon({ path });
}

export function setIcon(mode) {
  if (mode === "connecting") {
    if (animationTimer) return;
    animationIndex = 0;
    setStatic(SIGNAL_ICONS[animationIndex]);
    animationTimer = setInterval(() => {
      animationIndex = (animationIndex + 1) % SIGNAL_ICONS.length;
      setStatic(SIGNAL_ICONS[animationIndex]);
    }, 400);
    return;
  }

  stopAnimation();
  setStatic(STATIC_ICONS[mode] || STATIC_ICONS.ready);
}
