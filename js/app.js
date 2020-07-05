/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/**
 * @const {Object} - Initialize Game class.
 */
const game = new Game();
/**
 * @listens on @event {'click'} - On HTML object element with id 'btn_reset'.
 */
document.getElementById("btn__reset").addEventListener("click", function () {
  game.startGame();
});

/**
 * @listens on @event {'click'} - For each HTML object with class name 'key'.
 */
document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    game.handleInteraction(e.target.textContent);
  });
});

/**
 * @listens on @event {'keydown'} - Track user pressed keyboard key.
 */
document.addEventListener("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    game.handleInteraction(e.key);
  }
});
