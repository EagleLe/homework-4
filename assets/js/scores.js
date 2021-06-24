function printHighScores () {
    var highScores=JSON.parse(window.localStorage.getIteam("high Scores")) || [];
    highScores.sort(function(a,b){
        return b.score-a.score;
    });
    highScores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.intials + "-" + score.score;

        var olEl=Document.getElementById("high Scores");
        olEl.appendChild(liTag);
    });
}
function clearHighScores (){
    window.localStorage.removeItem("high Scores");
    window.location.reload ();
}
document.getElementById("clear").onclick = clearHighScores
printHighScores ();