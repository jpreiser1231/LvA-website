function switchStyle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var curSymbol = "moon";
    if(curSymbol === "moon") {
        curSymbol = "sun";
        document.getElementById("button").innerHTML = "☀️";
    }
    else if(curSymbol === "sun") {
        curSymbol = "moon";
        document.getElementById("button").innerHTML = "🌙";

    }
}
var currIndex = 0;
var imgArray = ["images/LVA1.png", "images/LVA2.png", "images/reCAPTCHA.png", "images/Duolingo.png"];
function nextImg()
{
    if(currIndex === 3)
    {
        document.getElementById("image").src = "images/LVA1.png";
        currIndex = 0;
        document.getElementById("img-number").innerHTML = "Image 1 of 4";
    }
    else
    {
        document.getElementById("image").src = imgArray[currIndex+1];
        currIndex++;
        var imgNum = currIndex+1;
        document.getElementById("img-number").innerHTML = "Image " + imgNum + " of 4";
    }
}
function prevImg()
{
    if(currIndex === 0)
    {
        document.getElementById("image").src = "images/Duolingo.png";
        currIndex = 3;
        document.getElementById("img-number").innerHTML = "Image 4 of 4";

    }
    else
    {
        document.getElementById("image").src = imgArray[currIndex-1];
        currIndex--;
        var imgNum = currIndex+1;
        document.getElementById("img-number").innerHTML = "Image " + imgNum + " of 4";
    }
}