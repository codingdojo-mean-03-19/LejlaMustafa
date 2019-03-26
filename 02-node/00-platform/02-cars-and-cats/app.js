var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  console.log('client request URL: ', request.url);
  if(request.url === "/cars"){
  	fs.readFile('./views/cars.html', 'utf-8', function(errors, contents){
  		response.writeHead(200, {'Content-Type':'text/html'});
  		response.write(contents);
  		response.end();
  	});
  }

  else if(request.url === '/cats'){
  	fs.readFile('./views/cats.html', 'utf-8', function(errors, contents){
  		response.writeHead(200, {'Content-Type':'text/html'});
  		response.write(contents);
  		response.end();
  	});
  }

  else if(request.url === '/cars/new'){
  	fs.readFile('./views/car_form.html', 'utf-8', function(errors, contents){
  		response.writeHead(200, {'Content-Type':'text/html'});
  		response.write(contents);
  		response.end();
  	});
  }

  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }

  else if(request.url === '/images/car.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/cat.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }


  else {
  	response.end('File is not available!');
  }
});

server.listen(7077);
console.log("Running in localhost at port 7077");