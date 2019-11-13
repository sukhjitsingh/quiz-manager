var express = require('express');
var router = express.Router();
const user = require('../data/user.json');



/* GET users listing. */
router.get('/', function(req, res, next) {
  let username = req.query.username
  let password = req.query.password
  console.log(username, password)
 let isValid = false;
//console.log(user);
user.forEach(element => {
  if(element.name.toLowerCase() == req.query.username.toLowerCase() && element.password.toLowerCase() == req.query.password.toLowerCase())
      isValid = true;
});

//return isValid;
 res.json(isValid);
});

module.exports = router;
