
//GLOBAL VARIABLES//
var currentGame = new Game();

//QUERY SELECTORS//
var classicBox = document.querySelector("#classicFighterBox");
var difficultBox = document.querySelector("#hardFighterBox");
var classicButton = document.querySelector("#classicChoice");
var difficultButton = document.querySelector("#difficultChoice");
var changeGameButton = document.querySelector(".change-game-button");
var sapphireIcon = document.querySelector("#sapphire");
var craneIcon = document.querySelector("#crane");
var fingerIcon = document.querySelector("#finger");
var unicornIcon = document.querySelector("#unicorn");
var starIcon = document.querySelector("#star");
var headerSpan = document.querySelector("span");

//EVENT LISTENERS//
window.addEventListener("load", displayGames);
classicButton.addEventListener("click", changeGameType);
difficultButton.addEventListener("click",changeGameType);

//FUNCTIONS//
function displayGames(){
  //show classic and difficult buttons
  //localstorage wins persisting
}

function changeGameType(){
  var gameTypeChoice = event.currentTarget.id;
  console.log(gameTypeChoice);
  currentGame.chooseGame(gameTypeChoice);
  displayFighters();
}

function displayFighters(){
  headerSpan.innerText = "Fighter";

  changeGameButton.classList.toggle("hidden");
  classicButton.classList.toggle("hidden");
  difficultChoice.classList.toggle("hidden");

  if(currentGame.gameType === "classic"){
    difficultBox.classList.toggle("hidden")
  }else if(currentGame.gameType === "difficult"){
    classicBox.classList.toggle("hidden")
  }
}
