// Load express Module
var express = require("express");
// Invoke express and store the result in the variable app
var app = express();
// Set static folder for html and css files.
app.use(express.static(__dirname + "/static"));
// Set location for ejs views
app.set('views', __dirname + '/views');
// Set ejs views engine
app.set('view engine', 'ejs');

// Use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    response.render('cats');
})

app.get("/first", function(request, response){
    var cat_array = [
        {src: 'images/cat1.jpeg', food: "Salmon", age: "1", sleep1: "anywhere", sleep2: "anyone's lap"}
    ];
    response.render('cuddles', {cat: cat_array});
})

app.get("/second", function(request, response){
    var cat_array = [
        {src: 'images/cat2.jpeg',food: "Cheeseburger", age: "4", sleep1: "by the fireplace", sleep2: "on the recliner"}
    ];
    response.render('cuddles', {cat: cat_array});
})

app.get("/third", function(request, response){
    var cat_array = [
        {src: 'images/cat3.jpeg',food: "pizza", age: "2", sleep1: "under the couch", sleep2: "window sill"}
    ];
    response.render('cuddles', {cat: cat_array});
})


// Tell express to listen on port 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})