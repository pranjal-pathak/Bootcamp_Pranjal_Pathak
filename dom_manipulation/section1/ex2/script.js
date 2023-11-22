document.addEventListener("DOMContentLoaded", function () {
  // Get the button and paragraph elements by their ids
  var clickButton = document.getElementById("clickButton");
  var clickCount = document.getElementById("clickCount");

  // Initialize the count
  var count = 0;

  // Add click event listener to the button
  clickButton.addEventListener("click", function () {
    // Increment the count
    count++;

    // Update the text content of the paragraph to display the count
    clickCount.textContent = "Count: " + count;
  });
});
