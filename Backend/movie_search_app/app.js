var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    var url = "http://www.omdbapi.com/?s=" + req.query.search + "&apikey=thewdb";
    console.log(url);
    request(url, function (error, response, body){
        if(error){
            console.log("<--------------- ERROR! --------------->");
            console.log(error);
        } else if(response.statusCode == 200){
            console.log("Response recieved");
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/", function(req, res){
    res.render("search");
});

// Handle invalid routes. Should be last route
// app.get("*", function(req, res){
//     console.log("Invalid page acess");
//     res.send("Invalid Page!");
// });

app.listen(3000, function(){
    console.log("Server started on port 3000");
});