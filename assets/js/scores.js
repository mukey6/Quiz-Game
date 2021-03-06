function displayHighScores() {
  var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];

  // sort highscores in descending order
  highScore.sort(function (a, b) {
    return b.score - a.score;
  });

  highScore.forEach(function (score) {
    var scoreList = document.createElement("li");
    scoreList.innerHTML = score.initials + " : " + score.score;

    // display on page
    var highScoreList = document.getElementById("highscores");
    highScoreList.appendChild(scoreList);
  });
}
function clearHighscores() {
  window.localStorage.removeItem("highScore");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

displayHighScores();
