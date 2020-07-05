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
   * @method - Initialize game.
   */
  startGame() {
    const wrong = document.querySelectorAll(".wrong");
    const chosen = document.querySelectorAll(".chosen");

    this.missed = 0;

    /**
     * @function - Sets for each item className to default 'key' class. And sets item @property {disabled} to false.
     * @param {Array} items - Array of HTML objects.
     */
    const defaultBtn = (items) => {
      items.forEach((item) => {
        item.className = ".key";
        item.disabled = false;
      });
    };

    defaultBtn(wrong);
    defaultBtn(chosen);

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
   * @method - Randomly retrieves one of the phrases stored in phrases array.
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /**
   * @method - It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
   * @param {String} - User chosen keyboard key code.
   */
  handleInteraction(button) {
    const buttons = document.querySelectorAll(".keyrow button");

    /**
     *
     * @param {String} letter - Keyboard chosen key code.
     * @param {String} className - Sets class name property to {foundBtn} object. By default className variable is set to "chosen".
     */
    const findByLetterAndSetClass = (letter, className = "chosen") => {
      const foundBtn = [...buttons].find(
        (button) => button.textContent === letter
      );
      foundBtn.disabled = true;
      foundBtn.className = className;
      if (className === "wrong") {
        foundBtn.className = " shake";
      }
    };

    // Checks if active phrase letter is equal to pressed key on keyboard.
    if (this.activePhrase.checkLetter(button)) {
      findByLetterAndSetClass(button);
      this.activePhrase.showMatchedLetter(button);
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      }
    } else {
      // if active phrase letter is not equal to pressed key on keyboard.
      findByLetterAndSetClass(button, "wrong");
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
   * @method - Checks to see if player guessed all letters in active phrase.
   */
  checkForWin() {
    return Array.from(document.querySelectorAll("#phrase ul li"))
      .filter((field) => field.className !== "space")
      .every((field) => field.className === "show");
  }
  /**
   * @method - Displays message win or loss.
   * @param {Boolean} - Win or loss.
   */
  gameOver(bool) {
    const overlay = document.querySelector("#overlay");
    const h1 = overlay.querySelector("h1");

    /**
     *
     * @param {String} className -  Sets overlay object class name.
     * @param {String} childText - Sets overlay object child h1 text content.
     */
    const setOverlayProps = (className, childText) => {
      overlay.style.display = "flex";
      overlay.className = className;
      h1.textContent = childText;
    };

    bool === true
      ? setOverlayProps("win", "Great job!")
      : setOverlayProps("lose", "Sorry, better luck next time!");
  }
}
