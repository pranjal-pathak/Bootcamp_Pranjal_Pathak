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
  });
});
