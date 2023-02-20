const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
    unique: true
  },
  images: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
});

const Blog = mongoose.model('Blog', userSchema);

module.exports = Blog;
