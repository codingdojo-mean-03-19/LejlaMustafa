const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Name required'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  lastName: {
    type: String,
    required: [true, 'Name required'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});
module.exports = mongoose.model('Author', AuthorSchema);