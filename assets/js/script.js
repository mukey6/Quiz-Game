var currentQuestionIndex = 0;
var countDown = 100;
// var currentScore=0
var clock;

var startButton = document.getElementById("start-btn")
var quesionContainerEl = document.getElementById("question-container")
var nextButton = document.getElementById("next-btn")
var intro = document.getElementById("intro")
var quesionEl = document.getElementById("question")
var answerEl = document.getElementById("answer-button")
var timer = document.getElementById("timer")
var gameOver = document.getElementById("end-game")
// var score = document.getElementById("score")

startButton.addEventListener("click", startGame)
function startGame (){
startButton.classList.add("hide")
quesionContainerEl.classList.remove("hide")
intro.classList.add("hide")
timer.textContent=countDown;
// score.innerText = currentScore



//need to stop timer 
clock = setInterval(function(){
  if ( countDown > 0){
    countDown--;
    timer.textContent=countDown;
    console.log("you have " + countDown + "secs" )
  } else {
    endGame()
  } 
    
}, 1000)

displayQuestion()
}


function nextQuestion(){
    // nextButton.classList.remove("hide")
    currentQuestionIndex++;

    if (
      currentQuestionIndex < questions.length ){
        displayQuestion()
console.log("show next questiom")
      } 
      // will come back to this to fix
      else {
        endGame()

      }
      

}
function displayQuestion() {
  document.getElementById("answer-button").innerHTML=""
  // var id = 1
  quesionEl.innerText = questions[currentQuestionIndex].title
  questions[currentQuestionIndex].choices.forEach(choice => {
    // console.log(choice);
    let button = document.createElement("button")
            button.innerText=choice
            answerEl.appendChild(button)
          button.className = "btn myClass"
          // button.onclick=selectedAnswer(document.querySelector(`.btn${id}`))
          // console.log(document.querySelector(`.btn${id}`).value)

// id++
  })
}
answerEl.addEventListener("click", selectedAnswer)

function selectedAnswer(event){
  // score.innerText = currentScore
var answerSelected = event.target.innerText
if (answerSelected != questions[currentQuestionIndex].answer){

countDown-=5
  console.log("wrong answer")
// currentScore --
//   console.log(currentScore + "you losts")
} else{

  console.log("right answer")
  // currentScore ++ 
  // console.log("you gained" + currentScore)
}
nextQuestion()
}
function endGame(){

  quesionContainerEl.classList.add("hide")
  
  // show final score
  var finalScoreEl = document.getElementById("final-score");

  gameOver.classList.remove("hide")

  clearInterval(clock)
  console.log("should stop time")
  finalScoreEl.textContent = countDown;

  
}
var questions = [
    {
        title: "Which Vikings player had the most sacks in 2018 season?",
        choices: ["Everson Griffen ", "Brian Robison ", "Danielle Hunter", "Harrison Smith"],
        answer: "Danielle Hunter"
      },

      {
        title: "Which quarterback had nine starts for the Vikings in 2013?",
        choices: ["Christain Ponder", "Case Keenum", "Kirk Cousins", "Geno Smith"],
        answer: "Christain Ponder"
      },
      {
        title: "Which team did the Vikings play in London during the 2013 season?",
        choices: ["Raiders", "Rams", "Steelers", "Texans"],
        answer: "Steelers"
      },
      {
        title: "What was the last team the Vikings played at the Metrodome?",
        choices: ["Ravens", "Lions", "Bears", "Packers"],
        answer: "Lions"
      },
      {
        title: "Which Vikings WR set the single-season rookie touchdown reception record?",
        choices: ["Randy Moss", "Chris Carter", "Adam Theilen", "Kyle Rudolph"],
        answer: "Randy Moss"
      },
  
    {
      title:"How Many Times Have the Vikings Gone to the Super Bowl?",
      choices: ["8", "4", "2", "0"],
      answer: "4"
    },
    
]
// function FinalScore(){

// }
// localStorage.setItem.json