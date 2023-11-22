document.addEventListener("DOMContentLoaded", function () {
  // Get the progress bar and container
  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.getElementById("progress-container");

  // Calculate the total scrollable height
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  // Update the progress bar on scroll
  window.addEventListener("scroll", function () {
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;

    // Show/hide the progress bar based on scroll position
    if (progress > 0) {
      progressContainer.style.display = "block";
    } else {
      progressContainer.style.display = "none";
    }
  });

  // Update the progress bar on window resize
  window.addEventListener("resize", function () {
    // Recalculate the total scrollable height on resize
    const newTotalHeight = document.body.scrollHeight - window.innerHeight;
    const newProgress = (window.scrollY / newTotalHeight) * 100;
    progressBar.style.width = `${newProgress}%`;
    totalHeight = newTotalHeight; // Update the total height
  });
});
