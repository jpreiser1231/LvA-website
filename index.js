function switchStyle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
var currIndex = 0;
console.log(currIndex);
var imgArray = ["images/LVA1.png", "images/LVA2.png", "images/reCAPTCHA.png", "images/Duolingo.png"];
function nextImg()
{
    if(currIndex === 3)
    {
        document.getElementById("myImg").src = "images/LVA1.png";
        currIndex = 0;
    }
    else
    {
        document.getElementById("myImg").src = imgArray[currIndex+1];
        currIndex++;
        console.log(currIndex);
    }
}