let qIndex = 0;
let time = question.length*15;
let timerCount;

let questionTextEl = document.querySelector('#questionText');
let questionScreenEl = document.querySelector('#question-screen');
let optionsEl = document.querySelector("#options");
let timeEl = document.querySelector("#time");
let startBtnEl = $('#startBtn');
// target initals input and submit button 


let question = [
  {
  questionText: "What is Javascript",
  options: ["computer language", "baking recipe"],
  answer: "computer language",
},
];


function startGame() {
  // hide start-screen. identify, add class to start-screen hide
  // unhide question-screen. call question-screen. remove "hide" class
  // start timer, define timerCount, apply setInterval(countDown, 1000) 
  // timerEl.textContent = time
  // call next function : getting questions
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
    buttonOption.onClick = correctAnswer;
    optionsEl.appendChild(buttonOption)
  })
}

function correctAnswer() {
  // 
}

function quizEnd(params) {
  // apply clearInterval
}


function
  let countdown = 150
  let timer = setInterval(function(){
    timerTextEl.textContent = countdown;
    countdown--;

  },1000)


})