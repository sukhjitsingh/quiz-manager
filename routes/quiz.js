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
    let eachQuestion = ""
    let eachCorrectAnswer = ""
    let eachAnswerSelection = ""
    questionsArray = []
    correctAnswerArray = []
    answerOptionsArray = []
    allOptions = []


    for (let i = 0; i < data.length; i++) {
      eachQuestion = data[i].question
      eachCorrectAnswer = data[i].correct_answer
      eachAnswerSelection = data[i].incorrect_answers
      questionsArray.push(eachQuestion)
      correctAnswerArray.push(eachCorrectAnswer)
      allOptions = [...eachAnswerSelection, eachCorrectAnswer]
      shuffle(allOptions)
      answerOptionsArray.push(allOptions)
    }

    console.log(questionsArray.length, questionsArray)
    console.log('all possible options', answerOptionsArray)
    console.log('correct answers', correctAnswerArray)

    if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');
    }
     
    localStorage.setItem('key', correctAnswerArray);



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
let quizSelection = async (category) => {

  let response = await axios.post(url, {
    category: category
  })

  return response.data.results;
}

module.exports = router;


