document.addEventListener("DOMContentLoaded", function () {
  
  var modal = document.getElementById("myModal");
  var openModalButton = document.getElementById("openModalButton");


  openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
  });


  window.closeModal = function () {
    modal.style.display = "none";
  };


  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
