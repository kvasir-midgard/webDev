var goal = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

var p1btn = document.getElementById("p1");
var p2btn = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var goalDisplay = document.getElementById("goalDisplay");
var numInput = document.querySelector("input");

resetbtn.addEventListener("click", reset);
p1btn.addEventListener("click", p1Counter);
p2btn.addEventListener("click", p2Counter);
numInput.addEventListener("change", goalUpdate);

function p1Counter(){
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
    }
    if(p1Score >= goal){
        gameOver = true;
        p1Display.style.color = "green";
        p2Display.style.color = "red";
    }
}

function p2Counter(){
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
    }
    if(p2Score >= goal){
        gameOver = true;
        p2Display.style.color = "green";
        p1Display.style.color = "red";
    }
}

function reset(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p2Display.textContent = 0;
    p1Display.textContent = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
}

function goalUpdate(){
    goalDisplay.textContent = this.value;
    goal = Number(this.value);
    reset();
}