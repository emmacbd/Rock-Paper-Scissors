
//GLOBAL VARIABLES//
var currentGame = new Game();
//QUERY SELECTORS//
var classicButton = document.querySelector("#classicChoice");
var difficultButton = document.querySelector("#difficultChoice");
var changeGameButton = document.querySelector(".change-game-button");
var sapphireIcon = document.querySelector("#sapphire");
var craneIcon = document.querySelector("#crane");
var fingerIcon = document.querySelector("#finger");
var unicornIcon = document.querySelector("#unicorn");
var starIcon = document.querySelector("#star");

window.addEventListener("load", displayGames);
classicButton.addEventListener("click", changeGameType)
difficultButton.addEventListener("click",changeGameType)

function displayGames(){
  //show classic and difficult buttons
  //localstorage wins persisting
}

function changeGameType(){
  var gameTypeChoice = event.currentTarget.id;
  console.log(gameTypeChoice);
  currentGame.chooseGame(gameTypeChoice);
}

function displayFighters(){
  //current
  //display changeGameButton
  //display fighter header
  //add hidden game header
  //add hidden classicChoice button
  //add hidden difficultChoice button
  if(currentGame.gameType === "classic"){
    //display/remove hidden #classicFighterBox
  }else if(currentGame.gameType === "difficult"){
    //display/remove hidden #hardFighterBox
  }
}
