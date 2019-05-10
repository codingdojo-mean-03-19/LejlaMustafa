const Author = require('mongoose').model('Author');

module.exports = {
  index (request,response){
    Author.find({})
      .then(authors => {
        response.json({ authors });
      })
      .catch(error => {
        console.log(error);
      });
  },
  create (request,response){
    console.log(request.body);
    Author.create(request.body)
      .then(author => {
        console.log(`New Author: ${author}`);
        response.json({ newAuthor: author });
      })
      .catch(error => {
        console.log(error);
      });
  },
  show (request,response){
    Author.findById(request.params.id)
      .populate('books')
      .then(result => {
        console.log(`Author Info: ${result}`);
        response.json({ authorInfo: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  update (request,response){
    Author.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(author => {
        response.json({ updatedAuthor: author });
        console.log(`Updated Author: ${author}`);
      })
      .catch(error => {
        console.log(error);
      });
  },
  destroy (request,response){
    Author.findByIdAndRemove(request.params.id)
      .then(result => {
        response.json({ deletedAuthor: result });
      })
      .catch(error => {
        console.log(error);
      });
  }
};