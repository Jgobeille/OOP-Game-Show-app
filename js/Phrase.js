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
    const randomPhrase = game.getRandomPhrase();
    const randomPhraseSplit = randomPhrase.phrase.split("");
    const phraseDiv = document.getElementById("phrase").children[0];

    //iterate over the phrase and output each letter(maybe make as a helper function?)
    randomPhraseSplit.map(letter => {
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
        const element = this.createElement(
          "LI",
          "name",
          "letter",
          `hide space`
        );
        this.appendChild(phraseDiv, element);
      }
    });
    //create an li class and pass in each letter or space into the created class
    //hide all of those letters
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
  //checkLetter method
  //iterate over the phrase and output each letter(use filter method to pull out all matches)
  //check if letter selected matches any of the letters in the phrase

  //showMatchedLetter method
  //use checkLetter filtered matches
  //set all of the matches display to "block"
}
