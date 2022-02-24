// sets global vaiable for highscores element
let olEl = document.getElementById("highscores")

// function that calls highscores from local storage and calls it as an object
function printHighScores() {
    let savedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    // for each locally saved highscore, html will creat and new list and will add the initals and score from that object. 
    savedScores.forEach(function(score){
      let liTag = document.createElement("li");
      liTag.textContent = `${score.initials}: ${score.score}`
      olEl.appendChild(liTag)
    })}
// function that removes locally stores high scores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
      }
      // Gives the clear button functionality by calling clearHighScores
      document.getElementById("clear-btn").onclick = clearHighscores;

// instantly runs printHighScores since its on a new html doc
printHighScores()

