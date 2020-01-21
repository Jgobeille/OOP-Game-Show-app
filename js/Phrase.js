/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */
  //PhraseToDisplay method
  addPhraseToDisplay() {
    const randomPhrase = game.activePhrase.phrase.split("");
    const phraseDiv = document.getElementById("phrase").children[0];

    //iterate over the phrase and output each letter(maybe make as a helper function?)
    randomPhrase.map(letter => {
      const letterUpper = letter.toUpperCase();
      //if there is more than one letter and if it is not a space, then append to the page
      if (letter.length <= 1 && letter.match(/[a-zA-Z]/i)) {
        const element = this.createElement(
          "LI",
          "name",
          "letter",
          `hide letter ${letterUpper}`,
          letterUpper
        );
        this.appendChild(phraseDiv, element);
        //if it is a space, append with hide space class
      } else {
        const element = this.createElement("LI", "name", "letter", `space`);
        this.appendChild(phraseDiv, element);
      }
    });
    return randomPhrase;
  }
  //creates Element
  createElement(elementName, property, value, className, text) {
    const element = document.createElement(elementName);
    element[property] = value;
    element.className = className;
    element.textContent = text;
    return element;
  }
  //appends the element to the page
  appendChild(element, elementToBeAppended) {
    element.appendChild(elementToBeAppended);
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    const random = game.activePhrase.phrase.toUpperCase();
    const randomUpper = random.split("");
    //iterate over the phrase and output each letter(use filter method to pull out all matches)
    //check if letter selected matches any of the letters in the phrase

    const check = oneLetter => oneLetter === letter;

    return randomUpper.some(check);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    //use checkLetter filtered matches
    const phraseDiv = [...document.querySelectorAll("#phrase li")];
    //iterate over the the phrases letter. If the letter passed in matches any of the letters in the phrase, show that letter.
    phraseDiv.map(phrase => {
      if (phrase.textContent === letter) {
        phrase.className = `show letter ${letter}`;
      }
    });
  }
}
