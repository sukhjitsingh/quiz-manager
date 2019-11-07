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
user.user.forEach(element => {
  if(element.name == req.query.username && element.password == req.query.password)
      isValid = true;
});

//return isValid;
 res.json(isValid);
//console.log(user.user[0].name);
  
  //  console.log(`user`);
     //res.json(user);
     
    //  user.forEach(function (usr){
    //      console.log(usr.name);
    //  });
  // user.foreach(element => {
  //   if(element.name == username && element.password == password){
  //     console.log(element.name)
  //   }//return true;
    //}
    //return false;
  //})
  // user.array.forEach(element => {
    
  // });  
 //res.send('respond with a resource');
});

module.exports = router;
