document.addEventListener("DOMContentLoaded", async function () {
  const countriesContainer = document.getElementById("countries-container");

  // Fetch data from REST Countries API
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countriesData = await response.json();

  // Take the first 50 countries (or less if there are fewer than 50)
  const countries = countriesData.slice(0, 50);

  // Populate the countries on the webpage
  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const countryName = document.createElement("div");
    countryName.textContent = country.name.common;
    countryCard.appendChild(countryName);

    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.png; // Use the flag URL from the API response
    countryFlag.alt = `${country.name.common} Flag`;
    countryCard.appendChild(countryFlag);

    countriesContainer.appendChild(countryCard);
  });
});
