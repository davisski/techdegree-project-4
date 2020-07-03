/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/**
 * @const {game} - Initialize Game Class
 */
const game = new Game();

document.getElementById("btn__reset").addEventListener("click", function (e) {
  game.startGame();
});

document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    game.handleInteraction(e.target.textContent);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    game.handleInteraction(e.key);
  }
});
