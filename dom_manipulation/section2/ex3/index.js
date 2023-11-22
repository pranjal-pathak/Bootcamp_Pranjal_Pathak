document.addEventListener("DOMContentLoaded", function () {
  var inputText = document.getElementById("inputText");
  var addToListButton = document.getElementById("addToListButton");
  var itemList = document.getElementById("itemList");

  addToListButton.addEventListener("click", function () {
    var newItemText = inputText.value;

    if (newItemText.trim() !== "") {
      var newItem = document.createElement("li");

      newItem.textContent = newItemText;

      itemList.appendChild(newItem);

      inputText.value = "";
    }
  });
});
