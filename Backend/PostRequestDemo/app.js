var friends = ["tom", "tim", "tad", "jan", "jim", "bob", "jon"];
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
    // res.send("Reached post route");
});

app.get("/friends", function(req, res){
    
    res.render("friends", {friends: friends});
});

app.get("/", function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});