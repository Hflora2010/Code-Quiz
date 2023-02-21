var quizQuest = document.getElementById("questions-container");
var startBtn = document.getElementById("start-button");
var mainScrn = document.getElementById("container");
var resultBtn = document.getElementById("results-button");
var timerEl = document.getElementById("timer");
var userAnswer = document.getElementById("a1", "a2", "a3", "a4");
var userScore = document.getElementById("userscore");
var finalScore = document.getElementById("finalscore");
var submitBtn = document.getElementById("submit-btn");
var userScore = document.getElementById("userscore");




var timeLeft = 60;
var questionIndex = 0;

// Quiz Questions.
var questions = [
  {
    question: "What is null",
    answers: ["Object", "Array", "String", "None of the above"],
    correct: 0,
  },
  {
    question: "Which is NOT a primitive data type",
    answers: ["String", "Boolean", "Variable", "Undefined"],
    correct: 2,
  },
  {
    question: "Which is NOT a type of loop in JavaScript",
    answers: ["For", "If else", "While", "For In"],
    correct: 1,
  },
  {
    question: "Booleans represent one of two values: true or false.",
    answers: ["True", "false"],
    correct: 0,
  },
  {
    question: "Math.random returns a number between 0 and what?",
    answers: ["10", "100", "infinity", "1"],
    correct: 3,
  }
]

// Function to start the game. Hiding main page elements.
function init() {
  startBtn.setAttribute("class", "hide");
  resultBtn.setAttribute("class", "hide");
  quizQuest.setAttribute("style", "display: flex");
  mainScrn.setAttribute("style", "display: none");


  // Calling nextQuestion function to move to the questions
  nextQuestion()

  // Calling to start the timer.    
  countdown();

}

//function to move to the next question
function nextQuestion() {
  quizQuest.children[0].innerHTML = questions[questionIndex].question
  var answerIndex = 1
  questions[questionIndex].answers.forEach(answer => {
    let button = document.getElementById(`a${answerIndex}`)
    button.innerHTML = answer
    button.addEventListener('click', correctAnswer)
    answerIndex += 1
  });
}


function correctAnswer(event) {
  let currentButton = event.target;
  let userAnswer = currentButton.innerHTML;
  let currentQuestion = questions[questionIndex]
  let correctIndex = currentQuestion.correct
  if (userAnswer === currentQuestion.answers[correctIndex]) {
    timeLeft += 5;
    // Move onto the next question
    questionIndex++

    // We've reached the end of the quiz.
    if (questionIndex === questions.length) {

      // Calling the endQuiz function to show enter initials page.
      endQuiz();
    } else {
      // Calling next question if there are more questions.
      nextQuestion();

    }
  } else {
    // Subtracting time when user gets an answer incorrect. 
    timeLeft -= 10;
    alert("Incorrect, try again.")
  }
}


function endQuiz() {
  userScore.setAttribute("style", "display: inline");
  quizQuest.setAttribute("style", "display: none");
  mainScrn.setAttribute("style", "display: none");
  timerEl.setAttribute("style", "display: none");
  finalScore.innerHTML = "Your Final Score: " + timeLeft;
}

//preventing the default when the sumbit button is clicked.
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var userInitials = document.getElementById("userinitials").value;

  // Converting string back into an object--taking it out of the array.
  var scores = JSON.parse(localStorage.getItem("score")) || [];
  scores.push(userInitials + ":" + timeLeft);

  // Putting data back into array. Not leaving it to chance.
  localStorage.setItem("score", JSON.stringify(scores));
  location.href = "highscores.html";
})

// Function for timer.
function countdown() {

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timeInterval)
    }

  }, 1000);
}

// Action that clicking Start Quiz button, will begin the game.
startBtn.addEventListener("click", init);