var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// http://localhost:3000/test/rusty
app.get("/test/:thing", function(req, res){
    var thing = req.params.thing;
    // sends thing to things file as javascript variable
    res.render("things", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post1", author: "John"},
        {title: "post2", author: "Jane"},
        {title: "post3", author: "Jimy"},
        {title: "post4", author: "Jack"}
    ];

    res.render("posts", {posts: posts});
});

app.get("/", function(req, res){
//  res.send("<h1>Welcome to the home page</h1>");
 res.render("index");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});