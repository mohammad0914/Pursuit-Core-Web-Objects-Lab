/**
 * Takes in a cat object and returns it's species.
 * @param {Object} catObj
 * @returns {string} - species
 */

const catSpecies = () => {};

/**
 * Takes in a cat object and a color. Add the key
 * color to the object pointing to the color passed in.
 * @param {Object} catObj
 * @param {string} color
 * @returns {Object} catObj
 */

const giveCatColor = () => {};

/**
 * Takes in a cat object and returns it's 'texture', if it has that property.
 * If it does not have the 'texture' property "throw Error('Does not have texture property')"
 * @param {Object} catObj
 * @returns {string} Texture or throws error.
 * @throws {Error} 'Does not have texture property'
 */

const catTexture = () => {};

//  What will the code below log?  Explain why.
// const p1 = {
//   name: 'Joe'
// }

// const p2 = {
//   name: 'Joe'
// }

// console.log(p1 === p2)

/**
 * Takes in an object and returns all the keys as an array.
 * Must be done without Object.keys
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */
const objKeys = () => {};

/**
 * Takes in an object and returns all the keys as an array.
 * Must use Object.keys .
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */

const objKeys2 = () => {};

/**
 * Takes in an object and returns all the values as an array.
 *  Must NOT use Object.values .
 * @param {Object}
 * @returns {*[]} All the values from the object
 */
const objValues = () => {};

/**
 * Takes in an object and returns all the values as an array.
 * Must use Object.values .
 * @param {Object}
 * @returns {*[]} All the values from the object
 */

const objValues2 = () => {};

/**
 * Takes in an array of film objects and
 * returns a new array with only the directors listed.
 * @param {Object[]} films
 * @returns {string[]} Only the directors
 */

const findDirectors = () => {};

/**
 * Takes in an array of people objects with with properties
 * firstName and lastName. Return a new array that has
 * everybody's full name.
 * firstName and lastName should be separated by one space only.
 * @param {Object[]} people - Array of person objects.
 * @returns {string[]} Full names.
 */

const fullNames = () => {};

/**
 * Takes in an object which maps a persons name to an array
 * of deposits that have been made to their account.
 *
 * Return the name and total amount of money deposited
 * of the person who received the most money.
 *
 * @param {Object} peopleAndDeposits
 * @returns {string} Largest earner. 
 *
 * Exp Input:
 *  {
 *     Williams: [300, 270, 24, 52, 99],
 *     Cooper: [200, 55, 600, 305, 410, 35],
 *     Davies: [4008, 568, 300],
 *     Clark: [555, 457, 995, 806, 569, 46, 265],
 *     Johnson: [126, 300, 640, 255, 268],
 *  };
 *
 * Exp Output:
 * "Davies made $4876"
 */
const largestEarner = () => {};

/**
 * Takes in an object and returns and array where
 * each key and value pair are together but separated by " & "
 * Exp Input: {"Peanut Butter": "Jelly"}
 * Output: ["Peanut Butter & Jelly"]
 * @param {Object} groups
 * @returns {string[]}
 */

const pairs = () => {};

/**
 * Takes in an array of films, where each film has the following
 * properites: title, director, watched (a boolean)
 *
 * Return an array where each element tell the user if they've watched the film or no.
 *
 * Exp Output:
 * [
 * 'You already watched "Wonder Woman" directed by Patty Jenkins.',
 * 'You still need to watch "Jaws" by director Steven Spielberg.'
 * ]
 *
 * @param {Object[]} films - Array of film objects.
 * @returns {string[]} Array of sentences about films
 */
const movieList = () => {};

/**
 * Takes in a sentence and returns most
 * frequent word that is longer than 5 characters.
 * @param {string} sentence Sentence or passage
 * @returns {string} Most frequent word longer than 5 characters
 */

const mostFreqWordGreaterThanFive = () => {};

/**
 * Takes in a sentence and a length.
 * Returns the most frequent word that is longer than the length.
 * @param {string} sentence - Sentence or passage
 * @param {number} length
 * @returns {string} Most frequent word longer than length
 */

const mostFreqWordGreaterThanLength = () => {};

/**
 * Takes in a sentence and returns the second most common letter
 * used from the english alphabet.
 * @param {string} sentence
 * @returns {string} Second most used letter.
 */

const secondMostFrequentLetter = () => {};

module.exports = {
  catSpecies,
  giveCatColor,
  catTexture,
  objKeys,
  objKeys2,
  objValues,
  objValues2,
  findDirectors,
  fullNames,
  largestEarner,
  pairs,
  movieList,
  mostFreqWordGreaterThanFive,
  mostFreqWordGreaterThanLength,
  secondMostFrequentLetter,
};
