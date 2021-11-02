const startButton =document.getElementById("start-btn")
const questionContainerEl = document.getElementById("question-container")
// const startButton =document.getElementById("start-btn")

startButton.addEventListener("click", startGame)
function startGame(){
startButton.classList.add("hide")
questionContainerEl.classList.remove("hide")
nextQuestion()
}

function nextQuestion(){

}

function selectAnswer(){

}



