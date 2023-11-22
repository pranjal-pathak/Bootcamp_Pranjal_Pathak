document.addEventListener("DOMContentLoaded", function () {

    var changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", function () {

    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

    document.body.style.backgroundColor = randomColor;
    });

});