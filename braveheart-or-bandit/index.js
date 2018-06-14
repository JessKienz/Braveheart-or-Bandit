 let  readlineSync  =  require('readline-sync');

 let favoritePerson = 'a';

 gameBegining();

function gameBegining() {
  console.log("\n***Are You a Braveheart or Bandit? Take the Journey to Find Out.***");

  favoritePerson = readlineSync.question("\nFirst, who is your favorite person in the whole world? >> ");

  console.log(`\nThat's too bad because you've stumbled upon the algorithm that thwarts Putin's plan to use digital warfare to take over the world. Unfortunately, he knows you have the knowledge to take him down, so he has enprisoned ${favoritePerson}, and threatens to kill them unless you surrender or die.`);

  console.log(`\nSince you’re a genius, you located where your ${favoritePerson} as been taken. A hideout in the middle of the wilderness. You go on foot to be unsuspected. \n You come across a solidier. Do you . . .`);
    levelOne();

  function levelOne() {
    let decision1 = readlineSync.question(" \na. Run or b. Hide >> ");

    if (decision1.toLowerCase() === "a") {
      console.log("\nCoward! You’re shot in the back and die a slow death. GAME OVER!")
      let playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
        if (playAgain.toLowerCase() === "yes") {
          gameBegining();
        } else if (playAgain.toLowerCase() === "no"){
          return;
        } else {
          console.log("\nInvalid. C'mon! Get it together.");
          playAgain();
        }

    } else if (decision1.toLowerCase() === "b") {
      console.log("\nSneak attack! Pow! Swack! He didn’t know what hit him. Think quick! You steal his uniform and rifle, then you . . .");
      levelTwo();
    } else {
      console.log("\nInvalid. C'mon! Get it together.");
        levelOne();
    }
  };

  function levelTwo() {
    let decision2 = readlineSync.question("\na. blind-fold and tie him up or b.shoot to kill? >> ");

    if (decision2.toLowerCase() === "b") {
      console.log("\nRuthless! \nKeep it moving. After what feels like an hour you come upon a camp of soldiers. You enter unnoticed in uniform and ignite a bomb to take out the whole camp. As you’re leaving you see a hottie (a rediculously attractive person) and a child who's being held captive. \nYou can only save one. Who do you choose?. . .")
        levelThree();
    } else if (decision2.toLowerCase() === "a") {
      console.log("\nAs you’re tying him up, he awakens, starts yelling, then bang! You’re sniped from who-the-hell-knows where. \nYou’re dead. Sorry. \nGAME OVER!");
        let playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
            if (playAgain.toLowerCase() === "yes") {
              gameBegining();
            } else if (playAgain.toLowerCase() === "no"){
              return;
            } else {
              console.log("\nInvalid. C'mon! Get it together.");
              playAgain();
          };
    } else {
      console.log("\nInvalid. C'mon! Get it together.");
        levelTwo();
        }
      };
  function levelThree() {
    let decision3 = readlineSync.question("\na. hottie or b. child? >> ");

    if (decision3.toLowerCase() === "a") {
      console.log("\nDuh! Luckily the hottie turns out to be a spy, and gives you directions and a map. You can take the . . .");
      levelFour();
    } else if (decision3.toLowerCase() === "b") {
      console.log("\nYour momma would be proud. However, the kid is mad at you for killing his comrades, shoots you with your own gun. Bang. \nYou’re dead. Sorry, not sorry. \nGAME OVER!");
          let playAgain = readlineSync.question("\nWant to play again? Yes | No >> ");
            if (playAgain.toLowerCase() === "yes") {
              gameBegining();
            } else if (playAgain.toLowerCase() === "no"){
              return;
            } else {
            console.log("\nInvalid. C'mon! Get it together.");
              gameBegining();
              };
    } else {
      console.log("\nInvalid. C'mon! Get it together.");
        levelThree();
      }
  };
  function levelFour() {
    let decision4 = readlineSync.question("\na. short treacherous route or b. long route through the village? >> ");

    if (decision4.toLowerCase() === "a") {
      console.log("\nYou come upon a rope bridge.")
          let decision4 = readlineSync.question("\nDo you a. cross or b. go around? >>")
              if (decision4.toLowerCase() === "a") {
                console.log("\nBrave. JK, stupid. Naturally, half way through, the bridge falls. You die. Too bad. \nYou were so close. GAME OVER!");
                  let playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
                      if (playAgain.toLowerCase() === "yes") {
                          gameBegining();
                        } else if (playAgain.toLowerCase() === "no"){
                          return;
                        } else {
                          console.log("\nInvalid. C'mon! Get it together.");
                          playAgain();
                        };
              } else if (decision4.toLowerCase() === "b") {
                  console.log("\nWise. Except, you trip, nearly fall off the cliff, but only lose your gun, just when an Amur tiger eats your face. You die. \nThe circle of life. GAME OVER!");
                      playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
                          if (playAgain.toLowerCase() === "yes") {
                              gameBegining();
                            } else if (playAgain.toLowerCase() === "no"){
                              return;
                            } else {
                              console.log("\nInvalid. C'mon! Get it together.");
                              playAgain();
                          };
                        };
    } else if (decision4.toLowerCase() === "b") {
        console.log("\nOn your way in the village you meet a guy who looks like the Rock. He says he wants to help you.");
          levelFive();
    } else {
        console.log("\nInvalid. C'mon! Get it together.");
          levelFour();
        }
  }

function levelFive() {
    let decision5 = readlineSync.question("\na. You let him come with you. or b. You don’t trust him, so you decline. >>")
    if (decision5.toLowerCase() === "a") {
      console.log("\nI understand. You could use the company. You chat about what is the best adventure movie. You think ...")
        levelSix();
    } else if (decision5.toLowerCase() === "b") {
        console.log("\nOuch! He gets offended and ends your life with a swift kick to the head. \nTough break! GAME OVER!");
          playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
            if (playAgain.toLowerCase() === "yes") {
                gameBegining();
            } else {
              return;
            };
    } else {
        console.log("\nInvalid. C'mon! Get it together.");
            levelFive();
    }
}

function levelSix(){
    let decision6 = readlineSync.question("\n a. Goonies, b. Indiana Jones, c. Star Wars,  d. Gardian of the Galaxy >>")
    if (decision6.toLowerCase() === "c" || "d") {
        console.log("\nHe agrees and you high-five and exchange IGs. He wishes you well and gives you a blue, life saving, pill and a red, instant death, pill as a parting gift. An hour or two later you arrive at the super villain’s lair. Do you . . .")
            levelSeven();
    } else if (decision6.toLowerCase() === "a" || "b") {
        console.log("\nHe disagrees, lectures you, then puts you in a surprise choke hold, and you die while hearing him laugh. \nIt was an accident. GAME OVER!");
            playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
                if (playAgain.toLowerCase() === "yes") {
                    gameBegining();
                  } else if (playAgain.toLowerCase() === "no"){
                    return;
                  } else {
                    console.log("\nInvalid. C'mon! Get it together.");
                    playAgain();
                };
              } else {
        console.log("\nInvalid. C'mon! Get it together.");
            levelSix();
    }
}
function levelSeven() {
    let decision7 = readlineSync.question("\na. ring the bell or b. scale the wall? >>")
    if (decision7.toLowerCase() === "a") {
      console.log(`\nDing Dong! You’re still in uniform so you stride right in and use the spy’s map to find the villain and ${favoritePerson}. Once there, you . . . >>`);
      levelEight();
    } else if (decision7.toLowerCase() === "b") {
      console.log("\nHalf way up, you’re spotted, shot at, and fall to your death. \n Boooo. Another one bites the dust. GAME OVER!")
        playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
          if (playAgain.toLowerCase() === "yes") {
              gameBegining();
            } else if (playAgain.toLowerCase() === "no"){
              return;
            } else {
              console.log("\nInvalid. C'mon! Get it together.");
              playAgain();
              }
    } else {
      console.log("\nInvalid. C'mon! Get it together.");
        levelSeven();
    }
}
function levelEight() {
    let decision8 = readlineSync.question(`\na. surrender to at least save ${favoritePerson} or b. let them kill ${favoritePerson}, but get a clear shot at the villain? >>`);
    if (decision8.toLowerCase() === "a") {
      console.log(`\nYou surrender. Your friend is freed, but you see no way out, and take the red kill pill to end your life on your own terms.\nYour sacrifice, bravery, and fearlessness proves you're a  . . . \nB R A V E H E A R T ! \nGAME OVER!`);
        playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
          if (playAgain.toLowerCase() === "yes") {
              gameBegining();
            } else if (playAgain.toLowerCase() === "no"){
              return;
            } else {
              console.log("\nInvalid. C'mon! Get it together.");
                levelEight();
            };
    } else if (decision8.toLowerCase() === "b") {
          console.log(`\n The villain shoots ${favoritePerson}, you shoot the villain with a lethal hit. You scramble to ${favoritePerson} and give them the life saving pill. Win! \nYou're ruthless, selfish, and shallowly motivated proving you're a . . . . \n B A N D I T! \n GAME OVER!`);
            playAgain = readlineSync.question("\nWant to play again? Yes | No >> ")
              if (playAgain.toLowerCase() === "yes") {
                  gameBegining();
                } else if (playAgain.toLowerCase() === "no"){
                  return;
                } else {
                  console.log("\nInvalid. C'mon! Get it together.");
                    levelEight();
              };
            }
        };
}
