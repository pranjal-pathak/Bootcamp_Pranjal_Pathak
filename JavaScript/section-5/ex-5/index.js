async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}

async function fetchMultipleUsers(userIds) {
  try {
    // Use Promise.all to fetch user data concurrently
    const userPromises = userIds.map((userId) => fetchUserData(userId));
    const usersData = await Promise.all(userPromises);

    // Log the combined result
    console.log("Combined User Data:", usersData);

    return usersData;
  } catch (error) {
    console.error("Error fetching multiple users:", error.message);
    throw error;
  }
}

// Example usage:
const userIds = [4, 5, 6]; // Replace with the desired array of user IDs
fetchMultipleUsers(userIds);
