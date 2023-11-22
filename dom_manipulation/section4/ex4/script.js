document.addEventListener("DOMContentLoaded", () => {
  const autocompleteInput = document.getElementById("autocompleteInput");
  const autocompleteSuggestions = document.getElementById(
    "autocompleteSuggestions"
  );
  const predefinedSuggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grapes",
    "Lemon",
    "Orange",
  ];

  autocompleteInput.addEventListener("input", () => {
    const inputText = autocompleteInput.value.toLowerCase();
    const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputText)
    );

    displaySuggestions(filteredSuggestions);
  });

  autocompleteSuggestions.addEventListener("click", (event) => {
    if (event.target.classList.contains("suggestion")) {
      autocompleteInput.value = event.target.textContent;
      autocompleteSuggestions.innerHTML = ""; // Clear suggestions after selection
    }
  });

  document.addEventListener("click", (event) => {
    if (!autocompleteSuggestions.contains(event.target)) {
      autocompleteSuggestions.innerHTML = ""; // Clear suggestions if clicked outside
    }
  });

  function displaySuggestions(suggestions) {
    const suggestionHTML = suggestions
      .map((suggestion) => `<div class="suggestion">${suggestion}</div>`)
      .join("");

    autocompleteSuggestions.innerHTML = suggestionHTML;
  }
});
