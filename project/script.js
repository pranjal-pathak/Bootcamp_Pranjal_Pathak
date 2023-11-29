let originalData;

document.addEventListener("DOMContentLoaded", function () {
  showLoadingAnimation();

  // Fetch data from the provided API
  setTimeout(() => {
    // Fetch data from the local JSON file
    fetch("biopharma.json")
      .then((response) => response.json())
      .then((data) => {
        const subsetData = data.slice(0, 50);
        hideLoadingAnimation();
        originalData = subsetData; // Store the original data
        populateTable(subsetData);
      });
  }, 700);
});

function applyFilters() {
  const yearFilter = document.getElementById("yearFilter").value;
  const diseaseFilter = document.getElementById("diseaseFilter").value;
  const areaFilter = document.getElementById("areaFilter").value;

  const filteredData = originalData.filter((row) => {
    return (
      (yearFilter === "" ||
        parseInt(row.publication_year) === parseInt(yearFilter)) &&
      (diseaseFilter === "" || row.disease_focused === diseaseFilter) &&
      (areaFilter === "" || row.research_area === areaFilter)
    );
  });

  populateTable(filteredData);
}

function resetFilters() {
  document.getElementById("yearFilter").value = "";
  document.getElementById("diseaseFilter").value = "";
  document.getElementById("areaFilter").value = "";

  populateTable(originalData);
}

function showLoadingAnimation() {
  const loadingContainer = document.querySelector(".loading-container");
  loadingContainer.classList.add("visible");
}

function hideLoadingAnimation() {
  const loadingContainer = document.querySelector(".loading-container");
  loadingContainer.classList.remove("visible");
}

function populateTable(data) {
  const table = document.querySelector(".data-table");
  const tableBody = document.getElementById("table-body");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Check if the header already exists
  const existingHeader = table.querySelector("thead");
  if (!existingHeader) {
    // Populate table header if it doesn't exist
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
            <th onclick="sortTable(0)">S.No.</th>
            <th onclick="sortTable(1)">Title</th>
            <th onclick="sortTable(2)">Publication Year</th>
            <th onclick="sortTable(3)">Research Area</th>
            <th onclick="sortTable(4)">Disease Focus</th>
            <th onclick="sortTable(5)">Impact Factor</th>
            <th onclick="sortTable(6)">Citation Count</th>
        `;
    const thead = document.createElement("thead");
    thead.appendChild(headerRow);
    table.appendChild(thead);
  }

  // Populate table rows dynamically
  data.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${row.title}</td>
            <td>${row.publication_year}</td>
            <td>${row.research_area}</td>
            <td>${row.disease_focused}</td>
            <td>${row.impact_factor}</td>
            <td>${row.citation_count}</td>
        `;
    tableBody.appendChild(tableRow);
  });
}

function sortTable(columnIndex) {
  const table = document.querySelector(".data-table");
  const rows = Array.from(table.getElementsByTagName("tr"));

  // Remove the header row
  const headerRow = rows.shift();

  // Get the current sorting order of the column
  const currentOrder = table.getAttribute("data-order") || "asc";

  // Toggle the sorting order
  const newOrder = currentOrder === "asc" ? "desc" : "asc";
  table.setAttribute("data-order", newOrder);

  // Change the color of the clicked column header to a darker shade of red
  headerRow.querySelectorAll("th").forEach((th, index) => {
    if (index === columnIndex) {
      th.style.backgroundColor = "#990000"; // Change this color as needed
    } else {
      th.style.backgroundColor = "#FF0000"; // Reset other columns to the original color
    }
  });

  // Sort rows based on the content of the selected column
  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();

    // Use localeCompare for sorting strings
    const comparison = aValue.localeCompare(bValue, undefined, {
      numeric: true,
      sensitivity: "base",
    });

    // Multiply by 1 to convert the result to a number (for numeric sorting)
    return currentOrder === "asc" ? comparison : -comparison;
  });

  // Insert the sorted rows back into the table
  rows.unshift(headerRow);
  table.tBodies[0].innerHTML = "";
  rows.forEach((row) => table.tBodies[0].appendChild(row));
}
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector("nav");

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  console.log("Script is running!");

  // ... rest of your code ...

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cardCarousel = document.querySelector(".card-carousel");

  const scrollDistance = 200; // Adjust as needed

  leftArrow.addEventListener("click", function () {
    console.log("Left arrow clicked");
    cardCarousel.scrollLeft -= scrollDistance;
    behavior: "smooth";
  });

  rightArrow.addEventListener("click", function () {
    console.log("Right arrow clicked");
    cardCarousel.scrollLeft += scrollDistance;
    behavior: "smooth";
  });

  function animateScroll(distance) {
    const startTime = performance.now();
    const startScrollLeft = cardCarousel.scrollLeft;

    function updateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 500, 1); // Adjust the duration as needed
      const newScrollLeft = startScrollLeft + distance * progress;

      cardCarousel.scrollLeft = newScrollLeft;

      if (progress < 1) {
        requestAnimationFrame(updateScroll);
      }
    }

    requestAnimationFrame(updateScroll);

    cardCarousel.addEventListener("wheel", function (event) {
      if (event.deltaY > 0) {
        cardCarousel.scrollLeft += scrollDistance;
      } else {
        cardCarousel.scrollLeft -= scrollDistance;
      }

      // Prevent the default scrolling behavior
      event.preventDefault();
    });
  }
});
