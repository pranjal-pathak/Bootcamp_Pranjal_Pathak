async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    console.log("User Data:", userData);

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}


fetchUserData(1);
