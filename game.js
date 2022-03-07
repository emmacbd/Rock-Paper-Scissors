


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

    var humanWins = humanChoice === "sapphire" && robotChoice === "fingers"
                 || humanChoice === "fingers" && robotChoice === "crane"
                 || humanChoice === "crane" && robotChoice === "sapphire"
                 || humanChoice === "sapphire" && robotChoice === "unicorn"
                 || humanChoice === "fingers" && robotChoice === "unicorn"
                 || humanChoice === "crane" && robotChoice === "star"

    var robotWins = robotChoice === "sapphire" && humanChoice === "fingers"
                 || robotChoice === "fingers" && humanChoice === "crane"
                 || robotChoice === "crane" && humanChoice === "sapphire"
                 || robotChoice === "sapphire" && humanChoice === "unicorn"
                 || robotChoice === "fingers" && humanChoice === "unicorn"
                 || robotChoice === "crane" && humanChoice === "star"

    if(humanChoice === robotChoice){
      this.winningPhrase = "It's a tie! Try again!"
    }
    if (humanWins){
      this.human.wins +=1;
      this.winner = "human";
      this.winningPhrase = `${this.human.icon} Human won this round! ${this.human.icon}`
    }
    if (robotWins){
      this.robot.wins +=1;
      this.winner = "robot";
      this.winningPhrase = `${this.robot.icon} Robot won this round! ${this.robot.icon}`
      }
    }
  }
