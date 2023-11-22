document.addEventListener("DOMContentLoaded", () => {
  const changeImage = (newImageUrl) => {
    const mainImage = document.getElementById("mainImage").querySelector("img");
    mainImage.src = newImageUrl;
  };

  window.changeImage = changeImage;
});
