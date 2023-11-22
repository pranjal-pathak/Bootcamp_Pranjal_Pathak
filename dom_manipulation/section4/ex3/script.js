document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const charCount = document.getElementById("charCount");

  textInput.addEventListener("input", () => {
    const inputText = textInput.value;
    const count = inputText.length;

    charCount.textContent = `Character Count: ${count}`;
  });
});
