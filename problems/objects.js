/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {object}
 * @returns {number} the number of apples Eve has.
 */

const eveAppleCount = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name. Return the number
 * of apples that the person passed in has.
 * If the person does not exist in the object it should return 0.
 * @param {object} - apple object with names and numbers
 * @param {string} - name of person
 * @returns {number} -  the number of apples name has.
 *
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.
 */

const appleCount = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Also takes in a new number of apples for Eve.
 * Reassign her number of apples to the new value and then return
 * the original object.
 *
 * @param {object}
 * @param {number} - new number of apples
 * @returns {object} the updated object.
 */

const eveAppleSet = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name, and the argument newNumberApple .
 * Update the object to have the name pointing to the newNumberApple
 * @param {object} - apple object with names and numbers
 * @param {string} - name of person
 * @param {number} - number of apples
 * @returns {object} -  updated object.
 *
 */

const appleSet = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {object} - apple object with names and numbers
 * @returns {number} -  total number of apples for adam and eve
 *
 */

const adamAndEveApples = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {object} - apple object with names and numbers
 * @returns {number} -  sum of all apples
 *
 */

const appleSum = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {object} - apple object with names and numbers
 * @returns {object} -  object with values set to zero.
 *
 */

const appleSetToZero = () => {};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {object} - countries and capitals
 * @returns {string} - capital of Russia
 */

const russiaCapital = () => {};

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {object} - countries and capitals
 * @param {string} - country
 * @returns {string} - capital of country
 */

const getCapital = () => {};

/**
 * Takes in an object of countries and their capitals
 * and adds the key value pair "Jamaica" and "Kingston"
 * Return the original object.
 *
 * @param {object} - countries and capitals
 * @returns {object} - countries now with Jamaica
 */

const addsJamaica = () => {};

/**
 * Takes in an object of countries and their capitals
 * and a country and capital. The country and capital should be
 * added to the object.
 * Return the original object.
 *
 * @param {object} - countries and capitals
 * @param {string} - country
 * @param {string} - capital
 * @returns {object} - countries
 */

const addsCountry = () => {};

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {array} - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {object} - {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

const authorScores = () => {};

/**
 * You are given an array of objects.
 * Each object in the array describes the score of a person.
 *  Find the person with the best score and return their full name.
 * @param {array} - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} - the full name of person with best score.
 */

const bestScore = () => {};

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {object} - {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {};

/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's.
 * @param {string} - str: "A good snake"
 * @returns {object} - counts of e and a. {a: 2, e: 1}
 */

const countAandE = () => {};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} - str: "A good snake"
 * @returns {object} - counts of e and a. {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = () => {};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} - str: "A good snake"
 * @returns {object} - counts of e and a. {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = () => {};

/**
 * Takes in an array and returns the most common element.
 * @param {array} - array of elements
 * @returns {number || string} - most common element
 */

const mostCommonElement = () => {};

/**
 * Takes in an object and an array.
 * Returns a new array.
 * If the element in the array is a key in the object the new
 * array should have the value in its place. Otherwise just use the array element.
 *
 * Exp Input:
 * {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
 * ["Ed Sheeran", "John Lennon", "Ray Charles"]
 *
 * Output:
 * ["guitar", "John Lennon", "piano"]
 *
 * @param {object}
 * @param {array}
 * @returns {array}
 */

const updateList = () => {};

/**
 * Takes in an object and a key. 
 * It should delete the key value pair from the object and 
 * return the changed object.
 * @param {object}
 * @param {string}
 * @returns {object}
 */

 const deleteKey = () => {};

module.exports = {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
};
