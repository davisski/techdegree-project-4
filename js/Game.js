/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
  }
  /**
   * @method - Initialize game
   */
  startGame() {}

  /**
   * @method - Randomly retrieves one of the phrases stored in phrases array
   */
  getRandomPhrase() {}
  /**
   * @method - It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
   */
  handleInteraction() {}
  /**
   * @method - Removes life, if guessed letter is incorrect, and updates @property missed of this @class {Game}
   */
  removeLife() {}
  /**
   * @method - Checks to see if player guessed all letters in active phrase
   */
  checkForWin() {}
  /**
   * @method - Displays message win or loss
   */
  gameOver() {}
}
