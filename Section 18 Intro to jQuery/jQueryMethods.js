alert($("h1").text());
alert($("li").text());
// $("h1").text("New Text!!!!");
// $("li").text("New Text!!!!");
$('ul').html(); // returns html inbetween ul tags

// change image source
$('img').attr("src"); // get source
$('img').attr("src", "newSource.jpg"); // set source

// grab only first img
$("img:first-of-type").attr("src", "newSource.jpg");

// grab last img
$("img").last().attr("src", "newSource.jpg");

// change all images
$("img").attr("src", "newSource.jpg");

// val() method gets value of input
$("input").val();
$("input").val("New iput"); // set input

// Events
- click()
- keypress()
- on()

$("h1").click(function(){
    alert("this function ran");
});

// add click listener to a collection

$("button").click(function(){
    alert("Clicked!");
});


// example of using 'this' with jQuery
$("button").click(function(){
    $(this).css("background", "pink");
});

// listen for keypress and do something on enter
$("input").keypress(function(event){
    // keycode for enter is 13
    if(event.which === 13){
        alert("You Hit Enter!!!")
    }
});

// the on() function supports many events

$("button").on("dbclick", function(){
    alert("Button was double clicked!");
});

$("a").on("dragstart", function(){
    alert("Drag started");
});

$('input[type="text"]').on("keypress", function(){
    alert("Text Input key pressed");
});

// click will only add listener for elements on the page
// on('click') will add event listeners for elements not on the page yet

// jQuery Effects

// run a command after fade out
$("button").on("click", function(){
    // fades div boxes for 1 sec then removes from page
    $('div').fadeout(1000, function(){
        $('div').remove();
    });
});

