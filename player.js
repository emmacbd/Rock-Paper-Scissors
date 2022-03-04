class Player {
  constructor(name, icon, wins){
    this.name = name;
    this.icon = icon;
    this.wins = wins;
  }


  takeTurn(fighterChoice){

  }
}
  var fighterChoices = ["sapphire", "crane", "fingers"]
  var robotChoice = choices[math.floor(math.random() * 3)]


//humanChoice = ["sapphire", "fingers", "crane"]
//var choices = ["sapphire", "fingers", "crane"]

//if humanchoice === robotChoice
//return "It's a draw! Try again!"
//
//computerChoice = choices[Math.floor(Math.random() * 3)]
//if humanChoice === sapphire && robotChoice === fingers
//return "Human won this round!"
//if humanChoice === fingers && robotChoice === crane
//return "Human won this round!"
//if humanChoice === crane && robotChoice === sapphire
//return "Human won this round!"


// sapphire > fingers
// crane > sapphire
// fingers > crane
