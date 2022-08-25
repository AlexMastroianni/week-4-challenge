var answer1 = document.querySelector("#ans_1");
var answer2 = document.querySelector("#ans_2");
var answer3 = document.querySelector("#ans_3");
var answer4 = document.querySelector("#ans_4");
var timerEl = document.querySelector("#timer");
var startQuizz = document.querySelector("#start");
var points = document.querySelector("#points");
var questionHolder = document.querySelector("#questions");
var answerHolder = document.querySelector("#answers");
var welcome = document.querySelector("#welcome");
var isCorrect = document.querySelector("#correctAnswer");
var highscore = document.querySelector("#highscore");
var userNameEl = document.querySelector("#userNameEl");
var userInputName = document.querySelector("#userInputName");
var submit = document.querySelector("#submitBtn");
var userScoreInput = localStorage.getItem("highscore");
let timerCount = 71;
var timer;

let i = 0;

let scores = JSON.parse(localStorage.getItem("scores") ?? "[]");

// let scores = JSON.parse(localStorage.getItem("scores") ?? "[]");

//hiding quizz itmes
questionHolder.style.display = "none";
answerHolder.style.display = "none";
timerEl.style.display = "none";
points.style.display = "none";
highscore.style.display = "none";

//hides info page and shows quizz items
startQuizz.addEventListener("click", function () {
  questionHolder.style.display = "block";
  answerHolder.style.display = "block";
  timerEl.style.display = "block";
  points.style.display = "block";
  welcome.style.display = "none";
  startQuizz.style.display = "none";
});

// Starts and stops countdown
function countdown() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = "time_remaining: " + timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startQuizz.addEventListener("click", countdown);

const questionArray = [
  {
    question: "Commonly used data types DO NOT include:",

    userChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if else statement is enclosed within ____.",
    userChoice: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: 1,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    userChoice: [
      "1. numbers and strings",
      "2. other arrrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Strings values must be enclosed within ____ when being assigned to variables.",
    userChoice: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses",
    ],
    correctAnswer: 2,
  },
  {
    question: "A very useful tool to debug arrays is",
    userChoice: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: 3,
  },
];

// Quizz start function
function setQuizQuestions() {
  if (i >= questionArray.length) {
    questionHolder.style.display = "none";
    answerHolder.style.display = "none";
    highscore.style.display = "block";
    isCorrect.style.display = "none";
    clearInterval(timer);
  } else {
    questionHolder.textContent = questionArray[i].question;
    answer1.textContent = questionArray[i].userChoice[0];
    answer2.textContent = questionArray[i].userChoice[1];
    answer3.textContent = questionArray[i].userChoice[2];
    answer4.textContent = questionArray[i].userChoice[3];
  }
}
setQuizQuestions();

// Handler for user question answer
function handleAnswerClick() {
  var index = this.getAttribute("data-index");
  index = parseInt(index);
  console.log("index", index, "question array", questionArray[i].correctAnswer);
  // i++;
  if (index === questionArray[i].correctAnswer) {
    isCorrect.textContent = "Correct";
    console.log("Correct");
  } else {
    isCorrect.textContent = "Wrong";
    console.log("Wrong");
    timerCount -= 10;
  }
  i++;
  setQuizQuestions();
}
//Add event delication
answer1.addEventListener("click", handleAnswerClick);
answer2.addEventListener("click", handleAnswerClick);
answer3.addEventListener("click", handleAnswerClick);
answer4.addEventListener("click", handleAnswerClick);

// savining user data to local storage
function saveScore(event) {
  event.preventDefault();
  var userInitals = userInputName.value;
  let score = timerCount;
  console.log(timerCount);
  scores.push({ userInitals, score });
  localStorage.setItem("scores", JSON.stringify(scores));
  window.location.href = "pages/scores.html";
}

//submit saves user data
submit.addEventListener("click", saveScore);