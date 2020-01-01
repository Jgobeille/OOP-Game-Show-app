/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrases = null;
  }

  createPhrases() {
    const array = [
      new Phrase("Hello1"),
      new Phrase("Hello2"),
      new Phrase("Hello3"),
      new Phrase("Hello4"),
      new Phrase("Hello5")
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
}
