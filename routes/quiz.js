var express = require('express');
var axios = require('axios')
var router = express.Router();

router.get('/', function (req, res, next) {
  let category = req.query.category
  quizSelection(category).then(data => res.send(data))
});

let url = `http://localhost:3000/api`
let quizSelection = async (category) => {

  let response = await axios.post(url, {
    category: category
  })

  return response.data.results;
}

module.exports = router;
