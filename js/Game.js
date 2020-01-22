/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 5;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  addClass(element, addedClass) {
    element.className = addedClass;
  }

  buttonReset() {
    buttons.forEach(button => {
      button.className = "key";
      button.disabled = false;
    });
  }

  createPhrases() {
    const array = [
      new Phrase("Simple and Clean"),
      new Phrase("Behold the power of darkness"),
      new Phrase("Aw phooey"),
      new Phrase("All for one and one for all"),
      new Phrase("No frowning and no sad faces"),
      new Phrase("Sora you lazy bum"),
      new Phrase("There are many worlds but they share the same sky"),
      new Phrase("This boat runs on happy faces"),
      new Phrase(
        "No matter where we are our hearts will bring us together again"
      ),
      new Phrase("Is any of this for real or not")
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
    const overlay = document.getElementById("overlay");
    new Phrase();
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    window.addEventListener("keydown", e => {
      console.log(e.key);
      game.handleInteractionKey(e.key);
    });
  }

  //organizes main game functions

  handleInteractionClick(button) {
    const buttonTargetText = button.target.innerText.toUpperCase();
    const buttonTarget = button.target;
    console.log(buttonTarget);
    buttonTarget.disabled = true;
    //if letter selected matches letter in phrase, show letter and add chosen class. Else, add wrong class and remove life
    if (game.activePhrase.checkLetter(buttonTargetText)) {
      game.activePhrase.showMatchedLetter(buttonTargetText);
      game.addClass(buttonTarget, "chosen");
      game.checkForWin();
    } else {
      game.addClass(buttonTarget, "wrong");
      game.removeLife();
    }
  }

  handleInteractionKey(key) {
    const keyText = key.toUpperCase();
    const keyLower = key;
    //if letter selected matches letter in phrase, show letter and add chosen class. Else, add wrong class and remove life
    const buttonKey = document.querySelector(`button[data-key="${keyLower}"]`);
    if (game.activePhrase.checkLetter(keyText)) {
      game.activePhrase.showMatchedLetter(keyText);
      game.addClass(buttonKey, "chosen");
      game.checkForWin();
    } else {
      game.addClass(buttonKey, "wrong");
      game.removeLife();
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

  checkForWin() {
    const phraseDiv = [...document.querySelectorAll("#phrase li")];
    //checks if every phrase does not contain the class hide
    const isNotHidden = phrase => phrase.classList[0] !== "hide";
    if (phraseDiv.every(isNotHidden)) {
      this.gameOver(true);
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = [...document.querySelectorAll("#scoreboard li img")];
    const counter = (this.missed -= 1);
    hearts[counter].setAttribute(
      "src",
      "https://treehouseproject.s3.amazonaws.com/Project+four+images/redHeart.png"
    );

    if (this.missed === 0) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const gameOverMessage = overlay.children[1];
    const phraseDiv = document.getElementById("phrase");
    const ul = document.createElement("ul");
    const hearts = [...document.querySelectorAll("#scoreboard li img")];
    this.missed = 5;
    phraseDiv.children[0].remove();
    phraseDiv.appendChild(ul);
    //iterate over the hearts and restore image
    hearts.map((nothing, i) => {
      hearts[i].setAttribute(
        "src",
        "https://treehouseproject.s3.amazonaws.com/Project+four+images/kingdom-hearts-heart-png-2.png"
      );
    });

    this.buttonReset();
    //if game not won, show lost game message. Else, show game won message
    if (!gameWon) {
      overlay.style.display = "";
      gameOverMessage.textContent = "Sorry! You ran out of lives!";
      buttonReset.textContent = "Continue?";
      game.addClass(overlay, "lose");
    } else {
      overlay.style.display = "";
      gameOverMessage.textContent = "You did it!";
      buttonReset.textContent = "Play Again?";
      game.addClass(overlay, "win");
    }
  }
}
