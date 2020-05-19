// Check off / on todo's
// $('li').click(function(){
//     // console.log($(this).css("color"));
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color : "black",
//             textDecoration : "none"
//         });
//     } else {
//         // $(this).css("color", "gray");
//         // $(this).css("text-decoration", "line-through");
//         $(this).css({
//             color : "gray",
//             textDecoration : "line-through"
//         });
//     }
// });

// Add click listener to ul and add it to new li
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    // stops event from going to li, ul, div, or body
    event.stopPropagation();
});

// Create new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newTodoText = $(this).val();
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + newTodoText + "</li>");
        $(this).val("");
    }
});

// Let plus symbol hide search
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});