class Player {
  constructor(name, icon){
    this.name = name;
    this.icon = icon;
    this.wins = 0;
    this.choice = " "
  }

  takeTurn(humanChoice, robotChoices){
    if(this.name === "human"){
      this.choice = humanChoice;
  } else {
      this.choice = robotChoices[Math.floor(Math.random() * robotChoices.length)]
    }
  }
}
