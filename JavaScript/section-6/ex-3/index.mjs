// Import functions from the stringUtils module
import { reverseString, countCharacters } from "./utils/stringUtils.mjs";

// Example usage
const originalString = "Hello, World!";

// Reverse the string
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

// Count the number of characters
const charCount = countCharacters(originalString);
console.log(`Number of Characters: ${charCount}`);
