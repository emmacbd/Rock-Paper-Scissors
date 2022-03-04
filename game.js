


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
    // this.winner = " " ;
  }

  chooseGame(gameType){
    if(gameType === "classic"){
    // var fighterChoices = ["sapphire", "crane", "fingers"]
    } else {
    var difficultFighterChoices = this.fighterChoices.push("unicorn", "star")
    }
  }

  determineWinner(humanChoice){
    this.robot.takeTurn("", this.fighterChoices)
    this.human.takeTurn(humanChoice,"")
    var robotChoice = this.robot.choice;
    var humanChoice = this.human.choice;
  //


    //CLASSIC RULES//
    //
    //DRAW RULES
    //if(humanchoice === robotChoice)
    //
    //return "It's a draw! Try again!"

    //HUMAN WINS
    //if (humanChoice === "sapphire" && robotChoice === "fingers")
    //human.wins +=1
    //return "Human won this round!"
    //if humanChoice === "fingers" && robotChoice === "crane")
    //human.wins +=1
    //return "Human won this round!"
    //if(humanChoice === "crane" && robotChoice === "sapphire")
    //human.wins +=1
    //return "Human won this round!"

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
    // if(humanChoice === "crane" && computerChoice === ("sapphire" || "star")
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
    }
  resetGame(){

  }

}
