async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    // console.log("User Data:", userData);
    processData(userData.username,userData.email);

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}

const processData=(user_name,email) =>{
    console.log(`${user_name} ${email}`);
}

fetchUserData(1);
