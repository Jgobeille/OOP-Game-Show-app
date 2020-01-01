/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * By: Jamie Gobeille
 */

/*
Resources used on project:
Beginner OOP: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
Button Element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-disabled
Keydown event: https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
Keyup event: https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
*/

/*
Understand the rules of the game:
1.) The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
2.) The player clicks an onscreen keyboard to guess letters in the phrase.
3.) The letter is disabled on the onscreen keyboard and a player can't select that letter again.
4.) If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
5.) The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.
*/

/*
Project Idea: Base the design on Kingdom Hearts! Change the hearts to image of kingdom hearts hearts and make the phrases kingdom hearts related!!
*/
const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

const logPhrase = phrase => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());