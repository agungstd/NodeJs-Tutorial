// Import from the updated calculator module
import { companyName, calculator } from "./calculator.js";

// Basic usage example
console.log("Company:", companyName);
console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(10, 5));
console.log("Division:", calculator.divide(10, 5));

// Using the new advanced features
console.log("\n--- Advanced Calculator Features ---");
console.log("Power:", calculator.power(2, 3));
console.log("Square root:", calculator.sqrt(16));
console.log("Absolute value:", calculator.abs(-42));
console.log("Modulo:", calculator.modulo(17, 5));

// Error handling example
console.log("\n--- Error Handling Examples ---");
try {
  console.log("Division by zero:", calculator.divide(10, 0));
} catch (error) {
  console.log("Error caught:", error.message);
}

try {
  console.log("Square root of negative:", calculator.sqrt(-4));
} catch (error) {
  console.log("Error caught:", error.message);
}

// Alternative import method using default export
console.log("\n--- Using Default Export ---");
import calc from "./calculator.js";
console.log("Default import add:", calc.add(20, 30));
