var express = require('express');
var axios = require('axios')
var router = express.Router();

var shuffle = require('shuffle-array')
// question and answer array parsed and stored into variables/
questionsArray = []
correctAnswerArray = []
answerOptionsArray = []
allOptions = []



router.get('/', function (req, res, next) {
  let category = req.query.category
  quizSelection(category).then((data) => {

    for (let i = 0; i < data.length; i++) {
      let eachQuestion = data[i].question
      let eachCorrectAnswer = data[i].correct_answer
      let eachAnswerSelection = data[i].incorrect_answers
      questionsArray.push(eachQuestion)
      correctAnswerArray.push(eachCorrectAnswer)

      //spread and combine eachCorrectAnswers and eachAnswerSelection
      allOptions = [...eachAnswerSelection, eachCorrectAnswer]
      //shuffle
      shuffle(allOptions)
      //all possible options into one array
      answerOptionsArray.push(allOptions)

    }
    console.log(questionsArray.length, questionsArray)
    console.log('all possible options', answerOptionsArray)
    console.log('correct answers', correctAnswerArray)


    res.send(
      {
        question: questionsArray,
        options: answerOptionsArray,
        correct: correctAnswerArray
      }

    )

  })

})

let url = `http://localhost:3000/api`
let quizSelection = async (category) => {

  let response = await axios.post(url, {
    category: category
  })

  return response.data.results;
}

module.exports = router;
