var express = require('express');
var router = express.Router();
const User = require('../models/user');

// Example route that retrieves all users from the database
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
