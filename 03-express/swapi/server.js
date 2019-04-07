const session = require('express-session');
const express = require("express");
const parser = require('body-parser');
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3001;
// invoke express and store the result in the variable app
const app = express();

const sessionConfig = {
    secret: 'superSekretKitteh',
    resave: false,
    name: 'session',
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
};

app.use(session(sessionConfig));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    // console.log('getting to index');
    response.render('index', { title: 'Star Wars Wiki - API Assignment' });
});

const swapiPeopleUrl = 'https://swapi.co/api/people';
const swapiPlanetUrl = 'https://swapi.co/api/planets';

class SwapiUrl{
    get base(){
        return 'https://swapi.co/api/';
    }
    get people(){
        return this.base + 'people';
    }
    get planet(){
        return this.base + 'planet';
    }
    // if a limit exists, 1) is there a default, 2) how to tack it onto the end
}

// :arg will be a number passed through to the API for number of results to be returned.
app.get('/people/:arg', (request, response) => {
    // use the axios .get() method - 
    // provide a url and chain the .then() and .catch() methods
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(swapiPeopleUrl);
        console.log('default apiCall returns: ', apiCall);
    }
    //  axios.get(swapiPeopleUrl)
    apiCall.then(data => {
        // log the data before moving on! 
//         console.log("got the data: ", data.data);
        request.session.category = '/people';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        // response.send(data.data);
        // rather than rendering, just send back the json data!
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log('The following errors were generated: ', error);
        response.json(error);
    })
});


app.get('/planets/:arg', (request, response) =>{
    // use the axios .get() method - 
    // provide a url and chain the .then() and .catch() methods
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(swapiPlanetUrl);
    }
    //  axios.get(swapiPlanetUrl)
    apiCall.then(data => {
        // log the data before moving on!
        console.log("got the data: ", data.data);
        request.session.category = '/planets';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        // response.send(data.data);
        // rather than rendering, just send back the json data!
        response.json(data.data);
    })
    .catch(error => {
         // log the error before moving on!
        console.log('The following errors were generated: ', error);
        response.json(error);
    })
});

app.get('/next', (request, response) => {
    response.redirect(request.session.category + '/next');
});

app.get('/prev', (request, response) => {
    response.redirect(request.session.category + '/prev');
});

app.get('/all', (request, response) => {
    response.redirect(request.session.category + '/0');
});

// catch 404 and forward to error handler
app.use((request, response, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, request, response, next) => {
    // set locals, only providing error in development
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};
    response.status(err.status || 500);
    // render the error page
    response.render('error', {title: 'Error page'});
  });

app.listen(port, () => console.log(`Express server listening on port ${port}`));    // ES6 way