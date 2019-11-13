var express = require('express');
var axios = require('axios')
var router = express.Router();
var quizSelect = require('../utils/quizSelect.js')


router.get('/', function (req, res, next) {
  let category = req.query.category

  getQuizSelection(category).then((data) => {
    let { questionsArray, answerOptionsArray } = quizSelect(data);

    console.log("Questions: ", questionsArray)
    console.log('All possible options: ', answerOptionsArray)
    // console.log('correct answers', correctAnswerArray)

    res.send(
      {
        question: questionsArray,
        options: answerOptionsArray,
        // correct: correctAnswerArray
      }

    )

  })

})

let url = `http://localhost:3000/api`
let getQuizSelection = async (category) => {

  let response = await axios.post(url, {
    category: category
  })

  return response.data.results;
}

module.exports = router;