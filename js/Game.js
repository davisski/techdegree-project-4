/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * @method - Initialize game
   */
  startGame() {
    this.missed = 0;

    const wrong = document.querySelectorAll(".wrong");
    const chosen = document.querySelectorAll(".chosen");

    if (wrong) {
      wrong.forEach((field) => (field.className = ".key"));
    }
    if (chosen) {
      chosen.forEach((field) => (field.className = ".key"));
    }
    document
      .querySelectorAll(".tries")
      .forEach((el) => (el.firstElementChild.src = "/images/liveHeart.png"));

    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * @method - Creates phrases to use in game.
   */
  createPhrases() {
    return [
      new Phrase("Object oriented JavaScript"),
      new Phrase("I love JavaScript"),
      new Phrase("Teamtreehouse"),
      new Phrase("Object oriented programming"),
      new Phrase("Full Stack JavaScript Student"),
    ];
  }
  /**
   * @method - Randomly retrieves one of the phrases stored in phrases array
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /**
   * @method - It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
   * @param {Object} - button -
   */
  handleInteraction(button) {
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      }
    } else {
      button.className = "wrong";
      if (this.missed < 4) {
        this.removeLife();
      } else {
        this.gameOver(this.checkForWin());
      }
    }
  }
  /**
   * @method - Removes life, if guessed letter is incorrect, and updates @property missed of this @class {Game}
   */
  removeLife() {
    let lives = Array.from(document.querySelectorAll(".tries"));
    lives[this.missed].firstElementChild.src = "/images/lostHeart.png";
    this.missed += 1;
  }
  /**
   * @method - Checks to see if player guessed all letters in active phrase
   */
  checkForWin() {
    return Array.from(document.querySelectorAll("#phrase ul li"))
      .filter((field) => field.className !== "space")
      .every((field) => field.className === "show");
  }
  /**
   * @method - Displays message win or loss
   */
  gameOver(bool) {
    const overlay = document.querySelector("#overlay");
    let h1 = overlay.querySelector("h1");
    if (bool) {
      overlay.style.display = "flex";
      overlay.className = "win";
      h1.textContent = "Great job!";
    } else {
      overlay.style.display = "flex";
      overlay.className = "lose";
      h1.textContent = "Sorry, better luck next time!";
    }
  }
}
