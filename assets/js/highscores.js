var submitBtn = document.getElementById("submit-btn");


submitBtn.addEventListener("click" , function(event) {
    event.preventDefault();
    

    for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.textContent = scores[i];
    li.setAttribute("data-index", i);
      var highScoresList = document.getElementById("highscores-list")
    location.href = "highscores.html";
    highScoresList.appendChild(li);
  }}
  )