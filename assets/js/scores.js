function displayHighScores (){
 var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];

 // sort highscores by score property in descending order
 highScore.sort(function(a, b) {
    return b.score - a.score;
  });

highscore.forEach(function(score) {
    var scoreList = document.createElement("li")
    console.log(scoreList + " this is your score")
    scoreList.innerHTML= score.initials + " : " + score.score


  // display on page
  var highScoreList = document.getElementById("highscores");
  highScoreList.appendChild(scoreList);
});

}
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;

displayHighScores()