/**
 * Advanced kalkulator module with extended functionality
 * @module kalkulator
 */

// Company brand name
const companyName = "Pojok Code";

/**
 * kalkulator object with basic and advanced mathematical operations
 * @type {Object}
 */
const kalkulator = {
  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add: (a, b) => a + b,
  
  /**
   * Subtract second number from first number
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract: (a, b) => a - b, // Fixed the method name spelling
  
  /**
   * Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply: (a, b) => a * b,
  
  /**
   * Divide first number by second number
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If divisor is zero
   */
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  },
  
  /**
   * Calculate the power of a number
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} The base raised to the power of exponent
   */
  power: (base, exponent) => Math.pow(base, exponent),
  
  /**
   * Calculate the square root of a number
   * @param {number} value - The number to calculate square root of
   * @returns {number} The square root of the value
   * @throws {Error} If value is negative
   */
  sqrt: (value) => {
    if (value < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(value);
  },
  
  /**
   * Calculate the absolute value of a number
   * @param {number} value - The input number
   * @returns {number} The absolute value
   */
  abs: (value) => Math.abs(value),
  
  /**
   * Calculate the modulo of two numbers
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder after division
   * @throws {Error} If divisor is zero
   */
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error("Modulo by zero is not allowed");
    }
    return a % b;
  }
};

// Named exports
export { companyName, kalkulator };

// Default export for convenient importing
export default kalkulator;