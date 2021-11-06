var currentQuestionIndex = 0;
var countDown = 5;

var startButton = document.getElementById("start-btn")
var quesionContainerEl = document.getElementById("question-container")
var nextButton = document.getElementById("next-btn")
var intro = document.getElementById("intro")
var quesionEl = document.getElementById("question")
var answerEl = document.getElementById("answer-button")
var timer = document.getElementById("timer")

startButton.addEventListener("click", startGame)
function startGame (){
startButton.classList.add("hide")
quesionContainerEl.classList.remove("hide")
intro.classList.add("hide")
//need to stop timer 
// setInterval(function(){
//   countDown--;
//   timer.textContent=countDown;
//   console.log("you have " + countDown + "secs" )
// }, 1000)

nextQuestion()
}

nextButton.addEventListener("click", nextQuestion)
function nextQuestion(){
    nextButton.classList.remove("hide")
    
    if (
      currentQuestionIndex < questions.length ){
        displayQuestion()
console.log("show next questiom")
      }
      // will come back to this to fix
      else {
        endGame()
      }
      
currentQuestionIndex++;

}

function displayQuestion() {
  quesionEl.innerText = questions[currentQuestionIndex].title
  questions[currentQuestionIndex].choices.forEach(choice => {
    console.log(choice);
    let button = document.createElement("li")
            button.innerText=choice
            answerEl.appendChild(button)
          button.className = "btn"
  })
}
answerEl.addEventListener("click", selectedAnswer)
function selectedAnswer(){
if (this !== questions[currentQuestionIndex].answer){
  console.log("you chose wrong")
}
else{

  console.log("right answer")
}


}


function endGame(){

  quesionContainerEl.classList.add("hide")
}
var questions = [
    {
        title: "Placeholder question:",
        choices: ["this answer1", "this answer2", "this answer3", "this answer4"],
        answer: "this answer1"
      },

      {
        title: "Placeholder question two:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
      },
      {
        title: "Placeholder question three:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer3"
      },
      {
        title: "Placeholder question four:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer4"
      },
      {
        title: "Placeholder question five:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer3"
      },
  
    
    
]
