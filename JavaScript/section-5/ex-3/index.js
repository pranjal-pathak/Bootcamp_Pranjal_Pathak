async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    console.log("User Data:", userData);

    // Process the user data only if the API call is successful
    processUserData(userData);

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}

function processUserData(userData) {
  // Example processing: Concatenate the user's name and email
  const result = `${userData.name} - ${userData.email}`;
  console.log("Processed User Data:", result);

  // You can add other processing logic as needed
}

// Example usage:
const userId = 1; // Replace with the desired user ID
fetchUserData(userId);
