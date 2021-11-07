var currentQuestionIndex = 0;
var countDown = 60;
var timer;

var startButton = document.getElementById("start-btn");
var quesionContainerEl = document.getElementById("question-container");
var intro = document.getElementById("intro");
var quesionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-button");
var time = document.getElementById("timer");
var gameOver = document.getElementById("end-game");
var submitBtn = document.getElementById("submit");
var initialEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

startButton.addEventListener("click", startGame);
// Start game
function startGame() {
  startButton.classList.add("hide");
  quesionContainerEl.classList.remove("hide");
  intro.classList.add("hide");
  time.textContent = countDown;

  // Adding a timer on the quiz
  timer = setInterval(function () {
    if (countDown > 0) {
      countDown--;
      time.textContent = countDown;
    } else {
      endGame();
    }
  }, 1000);

  displayQuestion();
}

// Display next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}
// Displaying question and answer choices
function displayQuestion() {
  document.getElementById("answer-button").innerHTML = "";

  quesionEl.innerText = questions[currentQuestionIndex].title;
  questions[currentQuestionIndex].choices.forEach((choice) => {
    let button = document.createElement("button");
    button.innerText = choice;
    answerEl.appendChild(button);
    button.className = "btn myClass";
  });
}
answerEl.addEventListener("click", selectedAnswer);

// selecting answer
function selectedAnswer(event) {
  var answerSelected = event.target.innerText;
  if (answerSelected != questions[currentQuestionIndex].answer) {
    countDown -= 5;
    feedbackEl.textContent = "WRONG!";
  } else {
    feedbackEl.textContent = "CORRECT!";
  }

  // right/wrong feedback on page
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 300);

  nextQuestion();
}

//when the game ends
function endGame() {
  quesionContainerEl.classList.add("hide");

  // show final score
  var finalScoreEl = document.getElementById("final-score");

  gameOver.classList.remove("hide");

  clearInterval(timer);
  finalScoreEl.textContent = countDown;
  time.classList.add("hide");
}

//Saving high scores
var saveHighScore = function () {
  initials = initialEl.value;

  if (initials !== "") {
    var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];

    // adding new score
    var newScore = {
      score: countDown,
      initials: initials,
    };

    highScore.push(newScore);
    window.localStorage.setItem("highScore", JSON.stringify(highScore));

    window.location.href = "highscore.html";
  }
};

// click on submit button
submitBtn.onclick = saveHighScore;

//list of questions
var questions = [
  {
    title: "Which Vikings player had the most sacks in 2018 season?",
    choices: [
      "Everson Griffen ",
      "Brian Robison ",
      "Danielle Hunter",
      "Harrison Smith",
    ],
    answer: "Danielle Hunter",
  },

  {
    title: "Which quarterback had nine starts for the Vikings in 2013?",
    choices: ["Christain Ponder", "Case Keenum", "Kirk Cousins", "Geno Smith"],
    answer: "Christain Ponder",
  },
  {
    title: "Which team did the Vikings play in London during the 2013 season?",
    choices: ["Raiders", "Rams", "Steelers", "Texans"],
    answer: "Steelers",
  },
  {
    title: "What was the last team the Vikings played at the Metrodome?",
    choices: ["Ravens", "Lions", "Bears", "Packers"],
    answer: "Lions",
  },
  {
    title:
      "Which Vikings WR set the single-season rookie touchdown reception record?",
    choices: ["Randy Moss", "Chris Carter", "Adam Theilen", "Kyle Rudolph"],
    answer: "Randy Moss",
  },

  {
    title: "How Many Times Have the Vikings Gone to the Super Bowl?",
    choices: ["8", "4", "2", "0"],
    answer: "4",
  },
];
