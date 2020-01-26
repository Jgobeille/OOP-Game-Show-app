/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = undefined;
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
    const random = Math.floor(Math.random() * upper - 1 + 1);
    return this.phrases[random];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    //get the screen overlay and hide it

    const overlay = document.getElementById("overlay");

    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  //organizes main game functions

  //Things to try and accomplish here

  handleInteraction(button) {
    const buttonTargetText = button.target.innerText;
    const buttonTarget = button.target;

    const key = button.key;

    //if letter selected matches letter in phrase, show letter and add chosen class. Else, add wrong class and remove life
    const buttonKey = document.querySelector(`button[data-key="${key}"]`);
    buttonTarget.disabled = true;
    //if letter selected matches letter in phrase, show letter and add chosen class. Else, add wrong class and remove life
    if (buttonTarget.nodeName === "BUTTON") {
      if (game.activePhrase.checkLetter(buttonTargetText)) {
        game.activePhrase.showMatchedLetter(buttonTargetText);
        game.addClass(buttonTarget, "chosen");
        if (game.checkForWin()) {
          game.gameOver(true);
        }
      } else {
        game.addClass(buttonTarget, "wrong");
        game.removeLife();
      }
    } else if (buttonTarget.nodeName !== "BUTTON" && key !== undefined) {
      if (game.activePhrase.checkLetter(key.toUpperCase())) {
        game.activePhrase.showMatchedLetter(key.toUpperCase());
        game.addClass(buttonKey, "chosen");
        if (game.checkForWin()) {
          this.gameOver(true);
        }
      } else {
        game.addClass(buttonKey, "wrong");
        //if button is not disabled then remove life and then set disabled to true
        if (buttonKey.disabled === false) {
          game.removeLife();
          buttonKey.disabled = true;
        }
      }
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
    return phraseDiv.every(isNotHidden);
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = [...document.querySelectorAll("#scoreboard li img")];

    hearts[this.missed].setAttribute(
      "src",
      "https://treehouseproject.s3.amazonaws.com/Project+four+images/redHeart.png"
    );

    this.missed += 1;

    if (this.missed === 5) {
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
      game = undefined;
    } else {
      overlay.style.display = "";
      gameOverMessage.textContent = "You did it!";
      buttonReset.textContent = "Play Again?";
      game.addClass(overlay, "win");
      game = undefined;
    }
  }
}
