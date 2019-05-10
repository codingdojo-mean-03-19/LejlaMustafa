const bookController = require('../controllers/books');
const authorController = require('../controllers/authors');

module.exports = function(app) {
  app.get('/authors', authorController.index);
  app.get('/authors/:id', authorController.show);
  app.post('/authors', authorController.create);
  app.put('/authors/:id', authorController.update);
  app.get('/authors/destroy/:id', authorController.destroy);

  app.get('/books/new', bookController.new);
  app.post('/books', bookController.create);
  app.get('/books/destroy/:id', bookController.destroy);
};