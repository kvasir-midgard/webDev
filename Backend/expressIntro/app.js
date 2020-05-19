// console.log("Express app will go here!");

var express = require("express");

var app = express();

// Route order matters, first one that matches will be run

// app.get("/speak/:animal", function(req, res){
//     switch(req.params.animal){
//         case "pig":
//             res.send("The pis says oink");
//             break;
//         case "cow":
//             res.send("The cow says moo");
//             break;
//         case "dog":
//             res.send("The dog says bark");
//             break;
//         default:
//             res.send("Invalid animal!");
//             break;
//     }
// });

app.get("/speak/:animal", function(req, res){
    var sound = {
        pig: "oink",
        cow: "mooo",
        dog: "bark",
        cat: "meow"
    }
    var animal = req.params.animal.toLowerCase();
    if(sound[animal]){
        res.send("The " + animal + " says " + sound[animal]);
    } else{
        res.send("Invalid animal");
    }
});

app.get("/repeat/:msg/:val", function(req, res){
    var result = "";
    var value = Number(req.params.val) + 1;
    var message = req.params.msg;
    for(var i = 1; i < value; i++){
        result += message + " ";
    }
    res.send(result);
});

// A pattern is used instead of explicity writing out routes
// One can use path variables / route permaiters
// http://localhost:3000/r/test
app.get("/r/:pattern1", function(req, res){
    var subPage = req.params.pattern1;
    res.send("welcome to the " + subPage + " subpage");
});

// http://localhost:3000/r/test/comments/42/cool
app.get("/r/:subPage/comments/:id/:title", function(req, res){
    // returns { subPage: 'test', id: '42', title: 'cool' }
    console.log(req.params);
    var subpageName = req.params.subPage;
    res.send("welcome to the " + subpageName + " subpage post comments");
});

// define first route 
// "/" will show "Hello World!" 
app.get("/", function(req, res){
    res.send("Hello World!");
});

// "/bye" will show "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});

// "/dog" will show "Bark"
app.get("/dog", function(req, res){
    console.log("Request made to /dog");
    res.send("Bark");
});

// "/cat" will show "Meow"
app.get("/cat", function(req, res){
    console.log("Request made to /cat");
    res.send("Meow");
});

// Handle invalid routes. Should be last route
app.get("*", function(req, res){
    console.log("Invalid page acess");
    res.send("Invalid Page!");
});

// http://localhost:3000/
app.listen(3000, function(){
    console.log("Serving express demo on port 3000");
});