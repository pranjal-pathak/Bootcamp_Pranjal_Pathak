document.addEventListener("DOMContentLoaded", function () {
  // Get the form and error message elements by their ids
  var emailForm = document.getElementById("emailForm");
  var errorMessage = document.getElementById("errorMessage");

  // Add submit event listener to the form
  emailForm.addEventListener("submit", function (event) {
    // Get the value of the email input
    var emailInput = document.getElementById("email").value;

    // Validate the email format without using regex
    var isValidEmail = validateEmail(emailInput);

    // Display an error message if the email is not valid
    if (!isValidEmail) {
      errorMessage.textContent = "Please enter a valid email address.";
      event.preventDefault(); // Prevent form submission if the email is not valid
    } else {
      errorMessage.textContent = ""; // Clear the error message if the email is valid
    }
  });

  // Function to validate email format without using regex
  let validateEmail=(email)=>{
    // Split the email address at the "@" symbol
    var emailParts = email.split("@");

    // Check if there are exactly two parts
    if (emailParts.length !== 2) {
      return false;
    }

    // Check if the second part contains a dot
    if (emailParts[1].indexOf(".") === -1) {
      return false;
    }

    return true;
  }
});
