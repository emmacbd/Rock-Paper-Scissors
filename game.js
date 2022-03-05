


// A Game should include:
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


//


class Game {
  constructor(){
    this.gameType = "classic";
    this.human = new Player("human", "👩‍🎤");
    this.robot = new Player("robot", "🤖");
    this.fighterChoices = ["sapphire", "crane", "fingers"];
    this.winner = " " ;
    this.winningPhrase = " ";
  }

  chooseGame(gameType){
    if(gameType === "difficultChoice"){
      this.gameType = "difficult";
      this.fighterChoices.push("unicorn", "star")
    } else if (gameType === "classic"){
      this.gameType = "classic";
      this.fighterChoices = ["sapphire", "crane", "fingers"];
    }
  }

  determineWinner(humanChoice){
    this.robot.takeTurn("", this.fighterChoices)
    this.human.takeTurn(humanChoice,"")
    var robotChoice = this.robot.choice;
    var humanChoice = this.human.choice;
    console.log(robotChoice, humanChoice);
    //DRAW RULES
    //if(humanchoice === robotChoice)
    //
    //return "It's a draw! Try again!"
    var humanWins = humanChoice === "sapphire" && robotChoice === "fingers"
      || humanChoice === "fingers" && robotChoice === "crane"
      || humanChoice === "crane" && robotChoice === "sapphire"

    if (humanWins){
      this.human.wins +=1;
      this.winner = "human";
      this.winningPhrase = `${this.human.icon}Human won this  round!${this.human.icon}`
  }
}
}
    //COMPUTER WINS
    //if(robotChoice === "sapphire" && humanChoice === "fingers")
    //robot.wins += 1
    //return "Robot won this round!"
    //if(robotChoice === "fingers" && humanChoice === "crane")
    //robot.wins += 1
    //return "Robot won this round!"
    //if(robotChoice === "crane" && humanChoice === "sapphire")
    //robot.wins += 1
    //return "Robot won this round!"



    //DIFFICULT RULES

    // HUMAN WINS
    // if(humanChoice === "sapphire" && computerChoice === ("fingers" || "unicorn")
    //human.wins +=1
    //return "Human won this round!"

    // if(humanChoice === "crane" && computerChoice === "sapphire" || "star"
    //human.wins +=1
    //return "Human won this round!"
    // if(humanChoice === "fingers" && computerChoice === ("crane" || "unicorn")
    //human.wins +=1
    //return "Human won this round!"
    // if(humanChoice === "unicorn" && computerChoice === ("crane" || "star")
    //human.wins +=1
    //return "Human won this round!"
    // if(humanChoice === "star" === && computerChoice === ("fingers" || "sapphire")
    //human.wins +=1
    //return "Human won this round!"
  //
  //console.log(this.winner);
// 
//   resetGame(){
//
//   }
//
// }
