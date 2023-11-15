// Import the axios library
import axios from "axios";

// Function to fetch data from a public API
const fetchData = async () => {
  try {
    // Example: Fetching data from the JSONPlaceholder API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // Display the result
    console.log("Fetched Data:", response.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error.message);
  }
};

// Call the fetchData function
fetchData();
