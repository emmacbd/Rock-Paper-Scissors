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
      this.choice = choices[math.floor(math.random() * robotChoices.length)]
    }

    // getRobotChoice(){
    // var robotChoice = choices[math.floor(math.random() * fighterChoices.length)]
    // return robotChoice
    // }
    //just have to choose a fighter
    //if(this.name === "robot"){
    // var robotChoice = choices[math.floor(math.random() * fighterChoices.length)]
    //return robotChoice
  }
}
  var fighterChoices = ["sapphire", "crane", "fingers"]
  if(gameChoice === difficult){
  var difficultFighterChoices = fighterChoices.push("unicorn", "star")
  }
  var robotChoice = choices[math.floor(math.random() * fighterChoices.length)]
