/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 5;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
  }

  createPhrases() {
    const array = [
      new Phrase("Hello one"),
      new Phrase("Hello two"),
      new Phrase("Hello three"),
      new Phrase("Hello four"),
      new Phrase("Hello five")
    ];

    return array;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const upper = this.phrases.length;

    for (let i = 0; i < this.phrases.length; i++) {
      const random = Math.floor(Math.random() * upper - 1 + 1);
      return this.phrases[random];
    }
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    //get the screen overlay and hide it
    const phrase = new Phrase();
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    phrase.addPhraseToDisplay();
  }

  handleInteraction() {}

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

  checkForWin() {
    const phraseDiv = [...document.querySelectorAll("#phrase li")];
    const isNotHidden = phrase => phrase.classList[0] !== "hide";
    return phraseDiv.every(isNotHidden);
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = [...document.querySelectorAll("#scoreboard li img")];
    const counter = (this.missed -= 1);
    hearts[counter].setAttribute("src", "images/lostHeart.png");

    if (this.missed === 0) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {}
}
