submitBtn.addEventListener("click" , function(event) {
    event.preventDefault();
    
    // console.log("SCORES: ", highScoresList)
    var userInitials = document.getElementById("userinitials").value;

    var scores = JSON.parse(localStorage.getItem("score")) || [];
    scores.push(userInitials + ":" + timeLeft);

    localStorage.setItem("score", JSON.stringify(scores));

    for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.textContent = scores[i];
    li.setAttribute("data-index", i);
      var highScoresList = document.getElementById("highscores-list")
    location.href = "highscores.html";
    highScoresList.appendChild(li);
  }}
  )