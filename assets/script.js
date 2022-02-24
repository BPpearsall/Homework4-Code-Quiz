let qIndex = 0;

let timerCount;

let startScreenEl = document.querySelector('#start-screen')
let questionTextEl = document.querySelector('#questionText');
let questionScreenEl = document.querySelector('#question-screen');
let optionsEl = document.querySelector("#options");
let timeEl = document.querySelector("#time");
let startBtnEl = document.querySelector('#startBtn');
let submitBtnEl = document.querySelector('#submit-button')
let highScoreSectionEl = document.querySelector('#highscore-section')
let finalScoreEl = document.querySelector('#final-score')
let initialEl = document.querySelector('#initials')
// target initals input and submit button 


let question = [
  {
  questionText: "What is Javascript",
  options: ["computer language", "baking recipe", "training regime", "fancy way of writing"],
  answer: "computer language",
},
{
  questionText: "What kind of logic can Javascript support",
  options: ["if, else statements", "for loops", "functions", "all of the above"],
  answer: "all of the above",
},
{
  questionText: "Commonly used datatypes DO NOT include:",
  options: ["boolean", "integer", "prompts", "string"],
  answer: "prompts",
},
];


let time = question.length*20;

function startGame() {
  startScreenEl.setAttribute("class", "hide");
  questionScreenEl.removeAttribute("class", "hide");
  timerCount = setInterval(countDown, 1000);
  timeEl.textContent = time;
  getQuestion()

  // hide start-screen. identify, add class to start-screen hide
  // unhide question-screen. call question-screen. remove "hide" class
  // start timer, define timerCount, apply setInterval(countDown, 1000) 
  // timerEl.textContent = time
  // call next function : getting questions
}
function hideStart() {
  
}

function getQuestion() {
  // call variable that = object "question[qIndex]"
  let currentQuestion = question[qIndex]
  questionTextEl.textContent = currentQuestion.questionText;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(function(option, i){
    let buttonOption = document.createElement("button");
    buttonOption.setAttribute("class", "option");
    buttonOption.setAttribute("value", option);
    buttonOption.textContent = i + 1 + ". " + option;
    buttonOption.onclick = correctAnswer;
    optionsEl.appendChild(buttonOption)
  })
}

function correctAnswer() {
  if (this.value !== question[qIndex].answer)  {
    time -= 20;
    alert("Wrong Answer")
    if (time < 0){
      time = 0
    }
    timeEl.textContent = time
    
  } else {
    alert("Right Answer")
  }
  qIndex++
  if (qIndex === question.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerCount);
  highScoreSectionEl.removeAttribute("class", "hide")
  questionScreenEl.setAttribute("class", "hide")
  finalScoreEl.textContent = time;

}

function saveHighScore() {
  let initials = initialEl.value.trim();
  if (condition) {
    
  }

  
}

function countDown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0){
      quizEnd();
    }
  };

startBtnEl.onclick = startGame;