var toggle = false;
var button = document.querySelector("button");

button.addEventListener("click", bgColor2);

function bgColor() {
    // alert("Clicked!");
    if (toggle) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
    toggle = !toggle;
}

function bgColor2() {
    document.body.classList.toggle("purple");
}