
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
var subHeader = document.querySelector(".sub-header");
var headerSpan = document.querySelector("span");
var winnerBanner = document.querySelector(".winner-banner");
var humanScore = document.querySelector("#humanScore");
var robotScore = document.querySelector("#robotScore");
var humanChoice = document.querySelector(".human-choice");
var robotChoice = document.querySelector(".robot-choice");
var fighterChoice = document.querySelector(".fighter-choice");

// var sapphireDisplay = "./images/sapphire.png"
// var craneDisplay = "./images/crane.png"

//EVENT LISTENERS//
window.addEventListener("load", displayGames);
classicButton.addEventListener("click", changeGameType);
difficultButton.addEventListener("click",changeGameType);
fighterBoxes.addEventListener("click", playGame);
changeGameButton.addEventListener("click", displayGames)

//FUNCTIONS//
function displayGames(){
  difficultButton.classList.remove("hidden");
  classicButton.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
  fighterBoxes.classList.add("hidden");
}

function changeGameType(){
  var gameTypeChoice = event.currentTarget.id;
  console.log(gameTypeChoice);
  currentGame.chooseGame(gameTypeChoice);
  displayFighters();
}

function displayFighters(){
  headerSpan.innerText = "Fighter!";
  winnerBanner.classList.add("hidden");
  fighterBoxes.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  classicButton.classList.add("hidden");
  difficultButton.classList.add("hidden");

  if(currentGame.gameType === "classic"){
    subHeader.classList.remove("hidden");
    headerSpan.innerText = "Fighter!";
    classicFighters.classList.remove("hidden")
    difficultFighters.classList.add("hidden")

  } else if(currentGame.gameType === "difficult"){
    subHeader.classList.remove("hidden");
    headerSpan.innerText = "Fighter!";
    classicFighters.classList.add("hidden")
    difficultFighters.classList.remove("hidden")
  }
}
  function playGame(){
    var fighterChoice = event.target.closest(".fighter").id;
    currentGame.determineWinner(fighterChoice);
    displayWinner();
    updateScore();
    setTimeout(displayFighters, 1700);
  }

function displayWinner(){
  subHeader.classList.add("hidden");
  winnerBanner.classList.toggle("hidden");
  fighterBoxes.classList.toggle("hidden")
  winnerBanner.innerHTML = currentGame.winningPhrase;

  //SHOW HUMAN AND ROBOT CHOICE SOMEHOW??
  // humanChoice.innerHTML = currentGame.humanChoice;
  // robotChoice.innerHTML = currentGame.robot.choice;
  // // currentGame.humanChoice.classList.remove("hidden");
  // currentGame.robotChoice.classList.remove("hidden");
  // displayFighters();
  // showHumanChoice()
}

function updateScore(){
  humanScore.innerText = currentGame.human.wins;
  robotScore.innerText = currentGame.robot.wins;
}
