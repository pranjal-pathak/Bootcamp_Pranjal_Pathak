document.addEventListener("DOMContentLoaded", () => {
  let currentNumber = 0;

  const addRow = () => {
    const table = document.getElementById("numberTable");
    const newRow = table.insertRow();
    const newCell = newRow.insertCell(0);
    newCell.textContent = currentNumber++;
  };

  const deleteLastRow = () => {
    const table = document.getElementById("numberTable");
    if (table.rows.length > 1) {
      table.deleteRow(table.rows.length - 1);
      currentNumber--;
    }
  };

  // Expose functions globally
  window.addRow = addRow;
  window.deleteLastRow = deleteLastRow;

  // Attach event listeners
  document.getElementById("addRowBtn").addEventListener("click", addRow);
  document
    .getElementById("deleteLastRowBtn")
    .addEventListener("click", deleteLastRow);
});
