document.addEventListener("DOMContentLoaded", function () {
  // Get the slider and text elements by their ids
  var fontSizeSlider = document.getElementById("fontSizeSlider");
  var resizableText = document.getElementById("resizableText");

  // Add input event listener to the slider
  fontSizeSlider.addEventListener("input", function () {
    // Update the font size of the text dynamically based on the slider value
    resizableText.style.fontSize = fontSizeSlider.value + "px";
  });
});
