var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Camp 1", image: "https://i.imgur.com/htuyMvC.jpg"},
    {name: "Camp 2", image: "https://i.imgur.com/tK4vvBf.jpg"},
    {name: "Camp 3", image: "https://i.imgur.com/1Ijrvax.jpg"},
    {name: "Camp 4", image: "https://i.imgur.com/mdfynYX.jpg"},
    {name: "Camp 5", image: "https://i.imgur.com/wiS99m7.jpg"},
    {name: "Camp 6", image: "https://i.imgur.com/kkQx0fQ.jpg"}
];

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds : campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.get("/", function(req, res){
    res.render("landing");
});

app.get("*", function(req, res){
    console.log("Invalid Page Acess!");
    res.send("Invalid Page!");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});