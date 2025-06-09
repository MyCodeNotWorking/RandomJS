/**
 * @module random
 * @description A utility library for generating random values: integer, float, and boolean.
 */

/**
 * Generates a random integer between the given inclusive bounds.
 *
 * @param {number} min - The lower bound (inclusive).
 * @param {number} max - The upper bound (inclusive).
 * @returns {number} A random integer between min and max.
 * @throws {TypeError} If min or max is not a number.
 */
function randomInt(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Both min and max must be numbers.');
  }
  if (min > max) {
    [min, max] = [max, min]; // swap to ensure correct bounds
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random floating-point number between the given bounds.
 *
 * @param {number} min - The lower bound (inclusive).
 * @param {number} max - The upper bound (exclusive).
 * @returns {number} A random float between min (inclusive) and max (exclusive).
 * @throws {TypeError} If min or max is not a number.
 */
const randomFloat = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Both min and max must be numbers.');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.random() * (max - min) + min;
};

/**
 * Generates a random boolean value.
 *
 * @returns {boolean} A random boolean.
 */
const randomBool = () => Math.random() >= 0.5;

// Export functions as named exports
export { randomInt, randomFloat, randomBool };

// Default export for backwards compatibility
export default {
  int: randomInt,
  float: randomFloat,
  bool: randomBool,
};
