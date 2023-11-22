document.addEventListener("DOMContentLoaded", function () {
    let addParaButton = document.getElementById("addParaButton");

    addParaButton.addEventListener("click", function () {
        let newPara = document.createElement("p");
        newPara.textContent = "A new paragraph of text!";
        document.body.appendChild(newPara);
    });
});