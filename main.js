
//QUERY SELECTORS//
var classicButton = document.querySelector("#classicChoice");
var difficultButton = document.querySelector("#difficultChoice");
var changeGameButton = document.querySelector(".change-game-button");
var sapphireIcon = document.querySelector("#sapphire")

window.addEventListener("load", startNewGame);


function startNewGame(){
  var newGame = new Game();
}
