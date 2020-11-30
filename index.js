const chalk = require("chalk");
var readlineSync = require("readline-sync");
console.log("\n");
console.log(chalk.bold.rgb(255,69,0)("Welcome to the quiz..!!"));
console.log("\n");
var userName = readlineSync.question("May I have your name? : ");
console.log("\n");
console.log(chalk.bold("Hello "+userName+" let's begin.."));
console.log(chalk.bold("Total are 3 levels."));
console.log(chalk.bold.green("Let's start with Level-1 on FRIENDS..!"));
console.log("\n");
console.log("----------------------");

var score = 0;

function play(question,answer){
  var userAns = readlineSync.question(question+"\n");
  console.log("You answered " + userAns);
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right answer!"));
    score++;
  } else {
    console.log(chalk.red("wrong answer!"));
  }
  console.log("-----------------");
}

var queAnsF = [
  {
    que: `Who is a Vegetarian?
      a: Ross
      b: Phoebe
      c: Monica`,
    ans: "b",
  },
  {
    que: `Who found out about Chandler and Monica first?
      a: Joey
      b: Phoebe
      c: Rachel`,
    ans: "a",
  },
  {
    que: `Who says this: "Stay out of this, Chandler! This is between me... and ME?
      a: Ross
      b: Rachel
      c: Monica`,
    ans: "c",
  },
  {
    que: `What does M. in Chandler stand for?
      a: Muriel
      b: Martin
      c: Mo`,
    ans: "a",
  },
  {
    que: `What did Ross want to do at Chandler and Monica's wedding?
      a: Sing
      b: Dance
      c: Play bagpipes`,
    ans: "c",
  },
  {
    que: `When did Friends start?
      a: 1994
      b: 2000
      c: 1990`,
    ans: "a",
  },
];

var queAnsM = [
  {
    que: `Who guards the Soul Stone in Infinity War?
      a: Red Skull
      b: Vision
      c: Xandar`,
    ans: "a",
  },
  {
    que: `What car dose Tony Stark drive?
      a: Audi R8
      b: BMW i8
      c: Porsche 911`,
    ans: "a",
  },
  {
    que: `How are Gamora and Nebula related to each other?
      a: Sisters
      b: Friends
      c: Neighbours`,
    ans: "a",
  },
  {
    que: `What is the Hulk's name when he's in human form?
      a: Bobby Boucher
      b: Bruce Banner
      c: Bernard Black`,
    ans: "b",
  },
  {
    que: `What is Black Widow's real name?
      a: Natasha Romanoff
      b: Naomi Vikingon
      c: David Evance`,
    ans: "a",
  },
  {
    que: `What's Iron Man's posh talking computer called?
      a: J.A.R.V.I.S
      b: M.A.R.T.I.N
      c: C.A.R.T.O.N`,
    ans: "a",
  },
];

var queAnsH = [
  {
    que: `Who does Hermione go with at the yule ball?
      a: Ron
      b: Victor Krum
      c: Neville`,
    ans: "b",
  },
  {
    que: `What is the name of the black family's House elf?
      a: Dobby
      b: Kreacher
      c: Scabbers`,
    ans: "b",
  },
  {
    que: `Who opened the chamber of secrets?
      a: Draco Malfoy
      b: Moaning Murtle
      c: Jinny Wesley`,
    ans: "c",
  },
  {
    que: `What animal does Professor McGonagall transform into?
      a: Cat
      b: Phoenix
      c: Wearwolf`,
    ans: "a",
  },
  {
    que: `Who is Harry Potter's Godfather?
      a: Remus Lupin
      b: Mad Eye Moody
      c: Serius Black`,
    ans: "c",
  },
  {
    que: `Which film does Hermione Granger read the three brothers in?
      a: HP6
      b: HP7 Part 1
      c: HP7 Part 2`,
    ans: "b",
  },
];

var highScore = [
  {
    name: "Ruthvick",
    score: 16,
  },
  {
    name: "Vaibhav",
    score: 15,
  },
  {
    name: "Kartiki",
    score: 13,
  }
];

for(var i=0;i<queAnsF.length;i++){
  var currQue1 = queAnsF[i];
  play(currQue1.que, currQue1.ans);
}
console.log(chalk.bold("Your score after Level-1 : " + score));
if(score>=5){
  console.log(chalk.bold.whiteBright("YAY!! You have cleared the Level-1"));
  console.log(chalk.bold.green("\nWelcome for Level-2 on Marvel's SUPERHEROS..!"));
  console.log("\n");
  for(var i=0;i<queAnsM.length;i++){
    var currQue2 = queAnsM[i];
    play(currQue2.que, currQue2.ans);
  }
  console.log(chalk.bold("Your score after Level-2 : " + score));
  if(score>=10){
    console.log(chalk.bold.whiteBright("GREAT..!!! You have passed the Level-2"));
    console.log(chalk.bold.green("\nLet's go for Level-3 based on HARRY POTTER Series..!\n"));
    for(var i=0;i<queAnsH.length;i++){
      var currQue3 = queAnsH[i];
      play(currQue3.que, currQue3.ans);
    }
    console.log(chalk.bold("Your final score : " + score));
    console.log("--------------------------");
    console.log("\n");
    console.log(chalk.bold.magentaBright("CONGRATULATIONS...!!! \n You are such a great player..!!"));
    // console.log("--------------------------")
    // console.log("\n");
    console.log(chalk.bold("\nCheck out the high scores:\n"));
    for(var i=0;i<highScore.length;i++){
      console.log(highScore[i].name + " : " + highScore[i].score);
    }
    console.log("\n");
    console.log(chalk.bold.bgYellow("If you have beaten anyone's score then send me the screenshot, so that I can update the high score data."));
  } else {
    console.log(chalk.bgYellow("\nYou are a good Player "));
    console.log(chalk.bold.redBright("\nScore at least 10 for next level based on HARRY POTTER...!! \n Good Luck!"));
  }
} else {
  console.log(chalk.bold.redBright("\nScore at least 5 for next level based on SUPERHEROS..!! \n Better Luck next time..!!"));
}

