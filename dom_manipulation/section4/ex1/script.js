document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("filterInput");
  const itemList = document.getElementById("itemList");
  const items = Array.from(itemList.getElementsByTagName("li"));

  filterInput.addEventListener("input", () => {
    const filterValue = filterInput.value.toLowerCase();

    items.forEach((item) => {
      const textContent = item.textContent.toLowerCase();
      item.style.display = textContent.includes(filterValue) ? "" : "none";
    });
  });
});
