document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");
  const body = document.body;

  const toggleTheme = () => {
    if (themeToggle.checked) {
      body.classList.add("dark-theme");
      themeText.textContent = "Dark Mode";
    } else {
      body.classList.remove("dark-theme");
      themeText.textContent = "Light Mode";
    }
  };

  window.toggleTheme = toggleTheme;
});
