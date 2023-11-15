// Creating an object representing a person
const person = {
  name: "John Doe",
  age: 25,
  addresses: [
    "123 Main Street, Cityville",
    "456 Oak Avenue, Townsville",
    "789 Pine Lane, Villageton",
  ],
};

// Destructuring to get properties
const { name, age, addresses } = person;

// Logging person information
console.log("Name:", name);
console.log("Age:", age);

// Logging each address in the addresses array
console.log("Addresses:");
addresses.forEach((address, index) => {
  console.log(`  ${index + 1}. ${address}`);
});
