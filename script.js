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
// var submit = document.querySelector("#submit");
var timerCount = 71;
var timer;
var score = 0;

let i = 0;

questionHolder.style.display = "none";
answerHolder.style.display = "none";
timerEl.style.display = "none";
points.style.display = "none";
// submit.style.display = "none";

startQuizz.addEventListener("click", function () {
  questionHolder.style.display = "block";
  answerHolder.style.display = "block";
  timerEl.style.display = "block";
  points.style.display = "block";
  welcome.style.display = "none";
  startQuizz.style.display = "none";
});

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
  {
    question: "",
    userChoice: ["1. ", "2. ", "3.  ", "4. "],
    correctAnswer: 0,
  },
];

console.log("question array", questionArray[i].question);
console.log("length", questionArray.length);

function setQuizQuestions() {
  questionHolder.textContent = questionArray[i].question;
  answer1.textContent = questionArray[i].userChoice[0];
  answer2.textContent = questionArray[i].userChoice[1];
  answer3.textContent = questionArray[i].userChoice[2];
  answer4.textContent = questionArray[i].userChoice[3];
}
setQuizQuestions();

answer1.addEventListener("click", function () {
  var index = this.getAttribute("data-index");
  index = parseInt(index);
  console.log("index", index, "question array", questionArray[i].correctAnswer);
  i++;
  if (index === questionArray[i].correctAnswer) {
    isCorrect.textContent = "Correct";
  } else {
    isCorrect.textContent = "Wrong";
    timerCount -= 10;
  }

  setQuizQuestions();
});

answer2.addEventListener("click", function () {
  var index = this.getAttribute("data-index");
  index = parseInt(index);
  console.log("index", index, "question array", questionArray[i].correctAnswer);
  i++;
  if (index === questionArray[i].correctAnswer) {
    isCorrect.textContent = "Correct";
  } else {
    isCorrect.textContent = "Wrong";
    timerCount -= 10;
  }

  setQuizQuestions();
});

answer3.addEventListener("click", function () {
  var index = this.getAttribute("data-index");
  index = parseInt(index);
  console.log("index", index, "question array", questionArray[i].correctAnswer);
  i++;
  if (index === questionArray[i].correctAnswer) {
    isCorrect.textContent = "Correct";
  } else {
    isCorrect.textContent = "Wrong";
    timerCount -= 10;
  }
  setQuizQuestions();
});

answer4.addEventListener("click", function () {
  var index = this.getAttribute("data-index");
  index = parseInt(index);
  console.log("index", index, "question array", questionArray[i].correctAnswer);
  i++;
  if (index === questionArray[i].correctAnswer) {
    isCorrect.textContent = "Correct";
  } else {
    isCorrect.textContent = "Wrong";
    timerCount -= 10;
  }

  setQuizQuestions();
});

// if the i is index is greater than the questionArray then stop the clock,
//hide the question elements and how the highscore elements
if (i == 5) {
  clearInterval(timer);
}
