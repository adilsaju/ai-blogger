const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const Blog = mongoose.model('Blog', userSchema);

module.exports = Blog;
