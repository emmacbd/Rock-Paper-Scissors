# Rock, Paper, Scissors!

## Table of Contents
- [Introduction](#introduction)
- [How to Set Up](#how-to-set-up)
- [How to Use](#how-to-use)
- [Learning Goals](#learning-goals)
- [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

## Introduction

Do you enjoy rock, paper, scissors, but have a hard time finding someone to play with?

With this app, you can test your rock, paper, scissors skills against a tireless robot opponent. In the classic version, rock is represented by a sapphire, paper by a paper crane, scissors by a pair of crossed fingers. The rules are same as the familiar school yard version, so play away!

If you grow tired of the classic version, you're in luck! You can also choose a five-fighter version, which throws a unicorn and a star into the mix for an even greater chance-testing challenge!

![Rock, Paper, Scissors Gif](https://user-images.githubusercontent.com/93603551/157143145-60f83e35-986f-4c25-8846-7dd44d17d1f1.gif)


### How to Set Up

1. Clone this [repo](https://github.com/emmacbd/Rock-Paper-Scissors).
2. `cd` into the directory.
3. Run `open index.html`.

### How to Use

On page load the user sees two buttons, one describing the classic rules of rock, paper, scissors, only in this version the "fighters" are a sapphire, a paper crane, and a hand holding up two crossed fingers. The other button describes a harder version, with two additional players, a unicorn and a star, added along with their respective rules.

The user can click on the version they wish to play. They will then see either the three or five icons, depending on the version they chose.

The classic rules are the same as rock, paper, scissors, only in this case rock is represented by sapphire, paper is represented by a crane, and scissors, by crossed fingers.

The difficult version uses the same rules as classic, but adds in a unicorn and a star
as possible fighters. In this version, unicorn beats star and crane, and star beats fingers and sapphire.

Once the user clicks on their chosen fighter, their robot opponent will also choose their fighter. The user's and the robot's chosen fighters will appear alongside each other, and the sub-header will change to either declare a winner, or announce a tie.

Each player will gain a point for every match they win. The user can switch games and retain the scores from previous games.

To restart the score the user may refresh the page.

### Learning Goals
1. Solidify knowledge of JavaScript concepts, particularly class-to-class interactions, by building a functional game
2. Develop project organization skills, by breaking down project into smaller steps and re-strategizing when necessary
3. Build confidence with basic CSS concepts, particularly grid

Overall I believe I achieved my learning goals. I struggled to conceptualize how I could tie all the things I'd learned in Mod 1 to create this game, but I was able to succeed by breaking down every component into smaller, more manageable pieces, and by seeking guidance from mentors and class mates. I also made sure to take time before writing any code to make a timeline for myself, knowing that I could alter it if needed. Just having a basic framework for my workflow helped me stay on task and keep track of the many working parts of this project. Also, I struggled with CSS in previous projects and made it a goal to utilize grid for the main layout of my page.

I learned so much by trial and error and I'm happy with the final product. In future projects I want to make sure to honor the planning process, as it made the actual code-writing process so much more focused and productive.

### Future Features
- Utilize local storage to allow human and computer wins to persist on page load.
- Add other varieties of fighter characters to increase game difficulty.

### Technologies Used
- JavaScript
- HTML
- CSS

## Contributor
- [Emma Brooke-Davidson](https://github.com/emmacbd)

### Project Specifications
- This was my final solo project for Mod 1 of Turing School. Project specs can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).
