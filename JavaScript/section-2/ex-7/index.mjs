// Create an array of persons
const persons = [
  { name: "Pranjal ", age: 26, address: "123 Main Street" },
  { name: "Neel ", age: 25, address: "456 Oak Avenue" },
];

// Copy the array (shallow copy)
const copiedPersons = [...persons];

// Add a new address to one of the persons
copiedPersons[0].address = "789 Pine Lane";

// Logging the original and copied arrays
console.log("Original Array:", persons);
console.log("Copied Array:", copiedPersons);


// In this example, a shallow copy of the persons array is created using the spread operator ([...persons]). The modification of the address for the person at index 0 in the copiedPersons array will also affect the persons array.
