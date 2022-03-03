class Player {
  constructor(name, icon, wins){
    this.name = name;
    this.icon = icon;
    this.wins = wins;
  }
  takeTurn(){

  }
}

//humanChoice = [sapphire, fingers, crane]
//robotChoice = [sapphire, fingers, crane]

//if humanchoice === robotChoice
//return "It's a draw! Try again!"
//
//computerChoice = 
//if humanChoice === sapphire && robotChoice === fingers
//return "Human won this round!"
//if humanChoice === fingers && robotChoice === crane
//return "Human won this round!"
//if humanChoice === crane && robotChoice === sapphire
//return "Human won this round!"


// sapphire > fingers
// crane > sapphire
// fingers > crane

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
