var express = require('express');

var app = express();

// app.get('/', function(request, response){
// 	response.render('index.ejs')
// });
app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    // hard-coded user data
    response.render('cars.ejs');
});

app.get("/cats", function (request, response){
    // hard-coded user data
    response.render('cats.ejs');
});

app.get("/cars/new", function (request, response){
    // hard-coded user data
    response.render('form.ejs');
});


app.listen(8000, function(){
    console.log('listening on 8000');
})