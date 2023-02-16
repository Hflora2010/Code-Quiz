var quizQuest = document.getElementById("questions-container-1");
var startBtn = document.getElementById("button");
var mainScrn = document.getElementById("container")

var questions = [
    {
        question: "What is your name?",
        answers: ["hailey", "brandon", "nightfall", "raven"],
        correct: "hailey"
    }
]

function init() {
    mainScrn.setAttribute("class" , "hide");
    startBtn.setAttribute("class" , "hide");
    quizQuest.removeAttribute("class");

    quizQuest.children[0].innerHTML = questions[0].question

    document.getElementById("a1").innerHTML = "hello"
    var answerIndex = 1
    questions[0].answers.forEach(answer => {
        document.getElementById(`a${answerIndex}`).innerHTML = answer
        answerIndex +=1
    });

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