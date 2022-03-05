
//GLOBAL VARIABLES//
var currentGame = new Game();

//QUERY SELECTORS//
var classicFighters = document.querySelector("#classicFighterBox");
var difficultFighters = document.querySelector("#hardFighterBox");
var classicButton = document.querySelector("#classicChoice");
var difficultButton = document.querySelector("#difficultChoice");
var changeGameButton = document.querySelector(".change-game-button");
var sapphireIcon = document.querySelector("#sapphire");
var craneIcon = document.querySelector("#crane");
var fingerIcon = document.querySelector("#finger");
var unicornIcon = document.querySelector("#unicorn");
var starIcon = document.querySelector("#star");
var fighterBoxes = document.querySelector(".fighter-boxes");
var headerSpan = document.querySelector("span");

//EVENT LISTENERS//
window.addEventListener("load", displayGames);
classicButton.addEventListener("click", changeGameType);
difficultButton.addEventListener("click",changeGameType);
fighterBoxes.addEventListener("click", playGame);
changeGameButton.addEventListener("click", displayGames)

//FUNCTIONS//
function displayGames(){
  var currentGame = new Game();
  difficultButton.classList.remove("hidden");
  classicButton.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
  //show classic and difficult buttons
  //localstorage wins persisting
}

function changeGameType(){
  var gameTypeChoice = event.currentTarget.id;
  currentGame.chooseGame(gameTypeChoice);
  displayFighters();
}

function playGame(){
  var fighterChoice = event.target.closest(".fighter").id;
  console.log(fighterChoice);
  currentGame.determineWinner(fighterChoice);
  //queryselect winnerbanner, innerHTML = currentGame.winningPhrase
  //player.icon
}

function displayFighters(){
  headerSpan.innerText = "Fighter";

  changeGameButton.classList.remove("hidden");
  classicButton.classList.toggle("hidden");
  difficultButton.classList.toggle("hidden");

  if(currentGame.gameType === "classic"){
    classicFighters.classList.remove("hidden")
    difficultFighters.classList.add("hidden")
  } else if(currentGame.gameType === "difficult"){
    classicFighters.classList.add("hidden")
    difficultFighters.classList.remove("hidden")
  }
}
