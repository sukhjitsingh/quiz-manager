var express = require('express');
var router = express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

let score;
router.post('/', function (req, res, next) {
  var key = localStorage.getItem('key');
  key = key.split(',')

  score = 0;
  console.log("submitted answers", req.body)

  console.log('key array', key)
  let userAnswers = req.body
  console.log('user ans', userAnswers)
  for (let i = 0; i < userAnswers.length; i++) {
    if (key[i] == userAnswers[i]) {
      console.log('key', key[i])
      console.log('user', userAnswers[i])
      score++
    }

  }
  console.log('Score: ', score)


  res.json(score);
});

module.exports = router;
