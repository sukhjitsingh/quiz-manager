
var express = require('express');
//added axios for api calls
var axios = require('axios')
var router = express.Router();

let data;
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(data);

  
});

//Get selection based on users selection
  // let selection = req.body.category
  let url = `http://localhost:3000/api`
  //api call
   axios.post(url, {
    category: '1'
  })
  .then(function (response) {
    data = response
    console.log(data)
    console.log(data.results, 'data.results')
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = router;
