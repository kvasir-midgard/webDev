var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// // make new object

// var tom = new Cat({
//     name: "Kitten",
//     age: 1,
//     temperament: "cute"
// });

// // add new object to db

// tom.save(function(err, cat){
//     if(err){
//         console.log("Error!");
//     } else{
//         console.log("Saved: " + cat + " to database");
//     }
// });

// make new object and save

// Cat.create({
//     name: "Daisy",
//     age: 15,
//     temperament: "nice"
// }, function(err, cat){
//     if(err){
//         console.log("Error!");
//     } else{
//         console.log("Saved: " + cat + " to database");
//     }
// });

// find object 
Cat.find({}, function(err, cats){
    if(err){
        console.log("Error!");
        console.log(err);
    } else{
        console.log("All the cats!");
        console.log(cats);
    }
});

// remove object