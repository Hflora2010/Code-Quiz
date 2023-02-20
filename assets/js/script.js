var quizQuest = document.getElementById("questions-container");
var startBtn = document.getElementById("start-button");
var mainScrn = document.getElementById("container");
var resultBtn = document.getElementById("results-button");
var timerEl = document.getElementById("timer");
var userAnswer = document.getElementById("a1", "a2", "a3", "a4");
var highscorePage = document.getElementById("highscore");
// var userScore = document.getElementById("userScore")
// var finishedQuizMsg = document.getElementById("finishedQuizMsg")
// var userTextbox = document.getElementById("userTextbox");
var userScore = document.getElementById("userscore");
var finalScore =document.getElementById("finalscore");
var submitBtn = document.getElementById("submit-btn");



var timeLeft = 60;
var questionIndex = 0;

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

  
  function init() {
    mainScrn.setAttribute("class", "hide");
    startBtn.setAttribute("class", "hide");
    resultBtn.setAttribute("class", "hide");
    quizQuest.removeAttribute("class", "hide");
    
    
    //paint the page
    nextQuestion()
    
    countdown();
    
    
    // var userAnswer = questions.answers;
    // var correctAnswer= questions.correct;
    // //console is saying this is not a function. help.
    // correctAnswer()
  }
  
  function nextQuestion() {
    // we might to clear out the current values of the buttons etc
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
      timeLeft+=5;
      // move on to the next question
      questionIndex++
      if (questionIndex === questions.length) {
        // then we've reached the end of the quiz

        endQuiz();
      } else {
        // there's still more
        nextQuestion();
        
      }
    } else {
      timeLeft -= 10;
      alert("wrong")
    }  
  }
  // a function here to save the time to localstorage
  // and it will also get rid of all of the questions from the dom


  function endQuiz() {
   clearInterval(timerEl);
    finalScore.innerHTML = "Your Final Score: " + timeLeft;
    // localStorage.setItem("score", timeLeft);
  }

  // var scoreArr = [];

  submitBtn.addEventListener("click" function()) {
    // event.preventDefault();
    
    // console.log("SCORES: ", highScoresList)
    var userInitials = document.getElementById("userinitials").value;

    var scores = JSON.parse(localStorage.getItem("score")) || [];
    scores.push(userInitials + ":" + timeLeft);

    localStorage.setItem("score", JSON.stringify(scores));
    var li = document.createElement("li");
    li.textContent = arr[i];
    li.setAttribute("data-index", i);
      var highScoresList = document.getElementById("highscores-list")
    location.href = "highscores.html";
    highScoresList.appendChild(li);
  }




    // var saveUserData = {
    //   timeLeft, 
    //   userInitials
    // }


  //   scoreArr.push(saveUserData)
  //   for (let i = 0; i < scoreArr.length; i++) {
  //     localStorage.setItem(`score${i}`, JSON.stringify(scoreArr[i]));
  //   }
  //   console.log(scoreArr)
  //   renderHighscores(scoreArr);
    
  // });

// var highScores = [];

// function renderHighscores(arr) {
//   // highScoresList.innerHTML = "";
//   var highScoresList = document.getElementById("highscores-list")
//   console.log("HIGH: ", highScoresList)
//   for (let i = 0; i < arr.length; i++) {
//     localStorage.getItem(JSON.parse(`score${i}`))
//     var li = document.createElement("li");
//     li.textContent = arr[i];
//     li.setAttribute("data-index", i);
//     // location.href = "results-index.html";
//     highScoresList.appendChild(li);
//   }
// for (var i = 0; i < scoreArr.length; i++) {
//   var highScore = todos[i];

// }
// }


  //function to save score to local storage
  // function saveScore() {

  // }





//   function endQuiz() {
// //stop time (106)
// //display score on screeen (110)
// //render input form
// //sumbit button (save data to local storage) and take to result-index
  
//     clearInterval(timerEl);
//     // finishedQuizMsg.innerHTML = "How Did You Do?";


//     showUserScore();
//     saveScore();
//   }


//   function showUserScore() {
//     //coming from index.html
//     initTextEl = document.createElement("input");
//     initTextEl.setAttribute("id", "initials-input");
//     initTextEl.setAttribute("type", "text");
//     initTextEl.setAttribute("name", "initials");
//     initTextEl.setAttribute("placeholder", "Your Initials Here");

//     highscorePage.appendChild(userTextbox);
//   }




  
    // quizQuest.replaceWith(highscorePage);
    // to rewrite in local storage get the array first then add the score then resave the array
    // let scoresArray = localStorage.getItem('scores')
    // if (!scoresArray) {
    //   scoresArray = []
    // }
    // scoresArray.push({initials: 'whatever saved to the ', score: timeLeft})
    // localStorage.setItem('scores', scoresArray)
  
 
  //when no time is left, go to high scores page 
  //when correct answers have all been answered with time remaining go to highscores page


  // endQuiz();

  
  function countdown() {

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
        }
      }, 1000);
    }
      
      
      // each time the question moves on 
      // we'll hide the current section
      // then show the next section
      
      // we'll populate the answers (loop)
      
      /// if answer is wrong
      // take time off (you can still move on)
      
      startBtn.addEventListener("click", init);