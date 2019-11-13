var shuffle = require('shuffle-array')

module.exports = function (data) {
    let questionsArray = []
    let correctAnswerArray = []
    let answerOptionsArray = []
    let allOptions = []
    let eachQuestion = "";
    let eachCorrectAnswer = "";
    let eachAnswerSelection = "";

    for (let i = 0; i < data.length; i++) {
        eachQuestion = data[i].question;
        eachCorrectAnswer = data[i].correct_answer;
        eachAnswerSelection = data[i].incorrect_answers;
        questionsArray.push(eachQuestion);

        correctAnswerArray.push(eachCorrectAnswer);
        allOptions = [...eachAnswerSelection, eachCorrectAnswer];

        shuffle(allOptions);
        answerOptionsArray.push(allOptions);
    }


    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    localStorage.setItem('key', correctAnswerArray);

    return { questionsArray, answerOptionsArray }
}