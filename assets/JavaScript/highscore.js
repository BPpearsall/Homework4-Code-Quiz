let olEl = document.getElementById("highscores")

function printHighScores() {
    let savedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    savedScores.forEach(function(score){
      let liTag = document.createElement("li");
      liTag.textContent = `${score.initials}: ${score.score}`
      olEl.appendChild(liTag)
    })}

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
      }
      
      document.getElementById("clear-btn").onclick = clearHighscores;

printHighScores()

