var quizQuest = document.getElementById("questions-container-1");
var startBtn = document.getElementById("start-button");
var mainScrn = document.getElementById("container");
var resultBtn = document.getElementById("results-button");
var timerEl = document.getElementById("timer");

var questions = [
    {
        question: "What is null",
        answers: ["Object", "Array", "String", "None of the above"],
        correct: "Object",

        question: "Which is NOT a primitive data type",
        answers: ["String", "Boolean", "Variable", "Undefined"],
        correct: "Variable",

        question: "Which is NOT a type of loop in JavaScript",
        answers: ["For", "If else", "While", "For In"],
        correct: "If else",

        question: "Booleans represent one of two values: true or false.",
        answers: ["True", "false"],
        correct: "True",

        question: "Math.random returns a number between 0 and what?",
        answers: ["10", "100", "infinity", "1"],
        correct: "1",

    }
]

function init() {
    mainScrn.setAttribute("class", "hide");
    startBtn.setAttribute("class", "hide");
    resultBtn.setAttribute("class", "hide");
    quizQuest.removeAttribute("class");

    quizQuest.children[0].innerHTML = questions[0].question

    document.getElementById("a1").innerHTML = "hello"
    var answerIndex = 1
    questions[0].answers.forEach(answer => {
        document.getElementById(`a${answerIndex}`).innerHTML = answer
        answerIndex += 1
    });

    function countdown() {
        var timeLeft = 75;

        var timeInterval = setInterval(function () {
          if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
          } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
          }
        }, 1000);
      }
      
      countdown();



    // loop over answers and for each do something

    // if (user === questions.correct) {
    //     // move on
    // } else {
    //     // subtract time etc...
    // }
    // console.log("click");
}

// a function check answers
// a function to move on to the next question

// each time the question moves on 
// we'll hide the current section
// then show the next section

// we'll populate the answers (loop)

/// if answer is wrong
// take time off (you can still move on)

startBtn.addEventListener("click", init);