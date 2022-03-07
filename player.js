//Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
//takeTurn

class Player {
  constructor(name, icon, ){
    this.name = name;
    this.icon = icon;
    this.wins = 0;
    this.choice = " "//choice?
  }
//true or false toggle for wins?

  takeTurn(humanChoice, robotChoices){
    if(this.name === "human"){
      this.choice = humanChoice;
  } else {
      this.choice = robotChoices[Math.floor(Math.random() * robotChoices.length)]
    }
  }
}
