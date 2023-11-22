document.addEventListener("DOMContentLoaded", function () {
    let highlightedPara = document.getElementById("highlightedPara");
    highlightedPara.addEventListener("mouseover",function(){
        highlightedPara.style.color = "red";
    })
    
    highlightedPara.addEventListener("mouseout",function(){
        highlightedPara.style.color = "";
    })
});