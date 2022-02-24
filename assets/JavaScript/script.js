// Set global variables for question index and timercount
let qIndex = 0;
let timerCount;

// Set global variables from Index.html
let startScreenEl = document.querySelector("#start-screen");
let questionTextEl = document.querySelector("#questionText");
let questionScreenEl = document.querySelector("#question-screen");
let optionsEl = document.querySelector("#options");
let timeEl = document.querySelector("#time");
let startBtnEl = document.querySelector("#startBtn");
let submitBtnEl = document.querySelector("#submit-button");
let highScoreSectionEl = document.querySelector("#highscore-section");
let finalScoreEl = document.querySelector("#final-score");
let initialEl = document.querySelector("#initials");

// Object of questions where each question, options, and answer are stored
let question = [
    {
        questionText: "What is Javascript",
        options: [
            "computer language",
            "baking recipe",
            "training regime",
            "fancy way of writing",
        ],
        answer: "computer language",
    },
    {
        questionText: "What kind of logic can Javascript support",
        options: [
            "if, else statements",
            "for loops",
            "functions",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        questionText: "Commonly used datatypes DO NOT include:",
        options: ["boolean", "integer", "prompts", "string"],
        answer: "prompts",
    },
];

// Was receiving erros when this was above Question Object, so placed the global time variable below it
let time = question.length * 20;

//Start game function hides start screen, unhides the question screen and begins the countdown function while calling getQuestion function 
function startGame() {
    startScreenEl.setAttribute("class", "hide");
    questionScreenEl.removeAttribute("class", "hide");
    timerCount = setInterval(countDown, 1000);
    timeEl.textContent = time;
    getQuestion();
}

// Calls the question object array and populates the questionText. For each option index, creates buttons that have each of the objects and calls correctAnswer function
function getQuestion() {
    let currentQuestion = question[qIndex];
    questionTextEl.textContent = currentQuestion.questionText;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(function (option, i) {
        let buttonOption = document.createElement("button");
        buttonOption.setAttribute("class", "option");
        buttonOption.setAttribute("value", option);
        buttonOption.textContent = i + 1 + ". " + option;
        buttonOption.onclick = correctAnswer;
        optionsEl.appendChild(buttonOption);
    });
}

// function checks if the button clicked matches the answer under the same object. If it does not equal the answer then subtracts time.
function correctAnswer() {
    if (this.value !== question[qIndex].answer) {
        time -= 20;
        alert("Wrong Answer");
        if (time < 0) {
            time = 0;
        }
        timeEl.textContent = time;
    } else {
        alert("Right Answer");
    }
    // When function gets called, the qIndex moves to the next array inside the questions object. 
    qIndex++;
    if (qIndex === question.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// Function to get called, stops the timercount interval. hides the question screen, unhides the highscore screen, and places the time remaining into finalscore
function quizEnd() {
    clearInterval(timerCount);
    highScoreSectionEl.removeAttribute("class", "hide");
    questionScreenEl.setAttribute("class", "hide");
    finalScoreEl.textContent = time;
}

// trims  whitespace off initials. checks to make sure that initials field isnt empty. if it isnt empty then it locally stores highscores
function saveHighScore() {
    let initials = initialEl.value.trim();
    if (initials !== "") {
        let highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
        // creates new object that stores the "score and initials"
        let newScore = {
          score: time,
          initials: initials
    };

    // puts newScore object at the end of highscore
    highscores.push(newScore);
    // locally stores new highscores object and turns them into strings
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    // opens up the highscore.html
    window.location.href = "highscore.html";
}
}

// function where when the user presses the enter key, it runs the savehighscore function
function submitScore(event){
  if (event.key === "Enter"){
    saveHighScore();
  }
}

// function that stores the code for the timer countdown
function countDown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}


submitBtnEl.onclick = saveHighScore

startBtnEl.onclick = startGame;

initialEl.onkeyup = submitScore;
