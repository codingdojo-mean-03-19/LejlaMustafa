const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book must have a title'],
    minlength: [2, 'Title must be longer than 2 chars']
  },
  pubyear: {
    type: Number,
    required: [true, 'Publication year required'],
    max: 2017
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);