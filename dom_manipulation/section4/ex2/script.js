document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("exampleForm");
  const submitButton = document.getElementById("submitButton");

  const submitForm = () => {
    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log("Form Data as Object:", formDataObject);
  };

  // Attach event listener directly to the button
  submitButton.addEventListener("click", submitForm);
});
