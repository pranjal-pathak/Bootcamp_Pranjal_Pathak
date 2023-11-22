document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("filterInput");
  const itemList = document.getElementById("itemList");
  const items = itemList.getElementsByTagName("li");

  filterInput.addEventListener("input", () => {
    const filterValue = filterInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const textContent = items[i].textContent.toLowerCase();
      if (textContent.includes(filterValue)) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  });
});
