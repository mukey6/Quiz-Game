var startButton = document.getElementById("start-btn")
var quesionContainerEl = document.getElementById("question-container")
var nextButton = document.getElementById("next-btn")
var intro = document.getElementById("intro")
var quesionEl = document.getElementById("question")

startButton.addEventListener("click", startGame)
function startGame (){
startButton.classList.add("hide")
quesionContainerEl.classList.remove("hide")
intro.classList.add("hide")

nextQuestion()
}

nextButton.addEventListener("click", nextQuestion)
function nextQuestion(){
    nextButton.classList.remove("hide")
displayQuestion()
}

function displayQuestion(){
    for (var i=0; i < questions.length; i++ ){
        quesionEl.innerText = questions[i].title

    }

}

function displayAnswers(){
    
}

console.log("show answer")

var questions = [
    {
        title: "Placeholder question:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
      },

      {
        title: "Placeholder question two:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
      },
      {
        title: "Placeholder question three:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
      },
      {
        title: "Placeholder question four:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
      },
      {
        title: "Placeholder question five:",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
      },
  
    
    
]
