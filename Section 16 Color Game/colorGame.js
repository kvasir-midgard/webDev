var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");

var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

resetButton.addEventListener("click", reset);
easyButton.addEventListener("click", easyMode);
hardButton.addEventListener("click", hardMode);

var colors = generateColors(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", squareClick);
}

function squareClick(){
    // get color of squareand compare to picked color
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = pickedColor;
        }
        changeColor(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?"
    } else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(numcolors){
    var arr = [];
    for(var i = 0; i < numcolors; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function easyMode(){
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

function hardMode(){
    numSquares = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}