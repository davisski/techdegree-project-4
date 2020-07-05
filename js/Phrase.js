/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * @method - Displays letter placeholders, when game is started.
   */
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    ul.innerHTML = "";
    const phraseSplitted = this.phrase.split("");
    for (let letter of phraseSplitted) {
      if (letter !== " ") {
        ul.innerHTML += `<li class="hide letter">${letter}</li>`;
      } else {
        ul.innerHTML += `<li class="space"> </li>`;
      }
    }
  }
  /**
   * @method - Checks if selected letter by player is equal to phrase letter.
   * @param {String} - Letter of key code.
   */
  checkLetter(letter) {
    return this.phrase.indexOf(letter) > -1;
  }
  /**
   * @method - Shows matched letters in phrase.
   * @param {String} - Letter of key code.
   */
  showMatchedLetter(letter) {
    let phraseHtml = document.querySelectorAll(".letter");

    [...phraseHtml].filter((phrase) => {
      if (phrase.textContent === letter) {
        phrase.className = "show";
      }
    });
  }
}
