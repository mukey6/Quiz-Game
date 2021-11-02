const startButton =document.getElementById("start-btn")
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById("question")
const answerButtonEl = document.getElementById("answer-button")
// const startButton =document.getElementById("start-btn")

startButton.addEventListener("click", startGame)
function startGame(){
startButton.classList.add("hide")
questionContainerEl.classList.remove("hide")
nextQuestion()
}

function nextQuestion(){
showQuestion()
}
function showQuestion(question){
questionEl.innerText = question.question
console.log("question should show up")
}

function selectAnswer(){

}
var questions = [
    {
        question: "guess the answer what?",
        answer:[
            {text: "what", correct: true},
            {text: "yes", correct: false}
        ]
    }
]


