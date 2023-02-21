
var scores = JSON.parse(localStorage.getItem("score")) || [];

// Getting locally stored highscores and showing them in a list on highscores page.
    for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.textContent = scores[i];
    li.setAttribute("data-index", i);
      var highScoresList = document.getElementById("highscores-list")
    location.href = "highscores.html";
    highScoresList.appendChild(li);
  }
