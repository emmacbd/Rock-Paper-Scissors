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
    } else if (gameType === "classicChoice"){
      this.gameType = "classic";
      this.fighterChoices = ["sapphire", "crane", "fingers"];
    }
  }

  determineWinner(humanChoice){
    this.robot.takeTurn("", this.fighterChoices)
    this.human.takeTurn(humanChoice,"")
    var robotChoice = this.robot.choice;
    var humanChoice = this.human.choice;

    var humanWins = humanChoice === "sapphire" && robotChoice === "fingers"
                 || humanChoice === "sapphire" && robotChoice === "unicorn"
                 || humanChoice === "fingers" && robotChoice === "crane"
                 || humanChoice === "fingers" && robotChoice === "unicorn"
                 || humanChoice === "crane" && robotChoice === "sapphire"
                 || humanChoice === "crane" && robotChoice === "star"
                 || humanChoice === "unicorn" && robotChoice === "star"
                 || humanChoice === "unicorn" && robotChoice === "crane"
                 || humanChoice === "star" && robotChoice === "fingers"
                 || humanChoice === "star" && robotChoice === "sapphire"

    var robotWins = robotChoice === "sapphire" && humanChoice === "fingers"
                 || robotChoice === "sapphire" && humanChoice === "unicorn"
                 || robotChoice === "fingers" && humanChoice === "crane"
                 || robotChoice === "fingers" && humanChoice === "unicorn"
                 || robotChoice === "crane" && humanChoice === "sapphire"
                 || robotChoice === "crane" && humanChoice === "star"
                 || robotChoice === "unicorn" && humanChoice === "star"
                 || robotChoice === "unicorn" && humanChoice === "crane"
                 || robotChoice === "star" && humanChoice === "fingers"
                 || robotChoice === "star" && humanChoice === "sapphire"

    if(humanChoice === robotChoice){
      this.winningPhrase = "It's a tie! Try again!"
    }

    if (humanWins){
      this.human.wins += 1;
      this.winner = "human";
      this.winningPhrase = `${this.human.icon} Human won this round! ${this.human.icon}`
    }
    
    if (robotWins){
      this.robot.wins +=1;
      this.winner = "robot";
      this.winningPhrase = `${this.robot.icon} Robot won this round! ${this.robot.icon}`
      }
    }

  resetGame(){
    this.gameType;
  }
}
