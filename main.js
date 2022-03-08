
//GLOBAL VARIABLE//
var currentGame = new Game();

//QUERY SELECTORS//
var classicFighters = document.querySelector("#classicFighterBox");
var difficultFighters = document.querySelector("#hardFighterBox");
var classicButton = document.querySelector("#classicChoice");
var difficultButton = document.querySelector("#difficultChoice");
var changeGameButton = document.querySelector(".change-game-button");
var fighterBoxes = document.querySelector(".fighter-boxes");
var subHeader = document.querySelector(".sub-header");
var headerSpan = document.querySelector("span");
var winnerBanner = document.querySelector(".winner-banner");
var humanScore = document.querySelector("#humanScore");
var robotScore = document.querySelector("#robotScore");
var humanChoiceIcon = document.querySelector(".human-choice-icon");
var robotChoiceIcon = document.querySelector(".robot-choice-icon");
var fighterChoice = document.querySelector(".fighter-choice");

//EVENT LISTENERS//
window.addEventListener("load", displayGames);
classicButton.addEventListener("click", changeGameType);
difficultButton.addEventListener("click",changeGameType);
fighterBoxes.addEventListener("click", playGame);
changeGameButton.addEventListener("click", displayGames);

//FUNCTIONS//
function displayGames(){
  difficultButton.classList.remove("hidden");
  classicButton.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
  fighterBoxes.classList.add("hidden");
  headerSpan.innerText = "Game!";
}

function changeGameType(){
  var gameTypeChoice = event.currentTarget.id;
  currentGame.chooseGame(gameTypeChoice);
  displayFighters();
}

function displayFighters(){
  headerSpan.innerText = "Fighter!";
  winnerBanner.classList.add("hidden");
  fighterBoxes.classList.remove("hidden");
  subHeader.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  classicButton.classList.add("hidden");
  difficultButton.classList.add("hidden");
  fighterChoice.classList.add("hidden");

  if(currentGame.gameType === "classic"){
    classicFighters.classList.remove("hidden")
    difficultFighters.classList.add("hidden")

  } else if(currentGame.gameType === "difficult"){
    classicFighters.classList.add("hidden")
    difficultFighters.classList.remove("hidden")
  }
}

function playGame(){
  var fighterChoice = event.target.closest(".fighter").id;
  currentGame.determineWinner(fighterChoice);
  displayWinner();
  updateScore();
  setTimeout(displayFighters, 2000);
}

function displayWinner(){
  subHeader.classList.add("hidden");
  winnerBanner.classList.remove("hidden");
  fighterBoxes.classList.add("hidden")
  winnerBanner.innerHTML = currentGame.winningPhrase;

  var humanFighterChoice = `<div class="fighter"id="${currentGame.human.choice}">
      <img src="./images/${currentGame.human.choice}.png" alt="${currentGame.human.choice} icon"></div>`;

  var robotFighterChoice = `<div     class="fighter"id="${currentGame.robot.choice}">
          <img src="./images/${currentGame.robot.choice}.png" alt="${currentGame.robot.choice} icon"></div>`;

  fighterChoice.classList.remove("hidden");
  fighterChoice.innerHTML = humanFighterChoice + robotFighterChoice;
}

function updateScore(){
  humanScore.innerText = currentGame.human.wins;
  robotScore.innerText = currentGame.robot.wins;
}
