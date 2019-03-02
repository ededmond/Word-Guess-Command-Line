const Word = require("./Word.js");
const inquirer = require("inquirer");
const randomWord = ["Hello","World","Hazardous","Amazing","Aardvark","Dreaming","Cat","Quick",
"Quintessential","Hanging","Puzzled"];
var myWord;
var guessedLetters =[];
var lives = 7;
var wins = 0;
var losses =0;
myWord = new Word(randomWord[Math.floor(Math.random()*randomWord.length)]);
play();
function play() {
    console.log(`Wrong Letters: ${guessedLetters}`.padEnd(30)+"lives: "+lives);
    console.log(myWord.show());

    inquirer.prompt([
        {
            message:"Please Guess a Letter",
            name:"letter"
        }
    ]).then(res => {
        if (guessedLetters.includes(res.letter)) {
            return play();
        }
        if (!myWord.guess(res.letter)) {
            guessedLetters.push(res.letter);
            lives--;
            if (lives < 1) {
                console.log("Sorry: you lose!");
                losses++;
                playAgain();
            } else {
                play();
            }
        } else {
            let temp = myWord.show();
            console.log(temp);
            if (temp.includes("_")) {
                play();
            } else {
                console.log("Congratulations! You win!");
                wins++;
                playAgain();
            }
        }
        
    })
}
function playAgain() {
    console.log(`Wins: ${wins}`.padEnd(30) +`Losses: ${losses}`);
    inquirer.prompt([
        {
            message:"Would you like to play again?",
            name:"answer",
            type:"confirm"
        }
    ]).then(response=> {
        if (response.answer) {
            guessedLetters =[];
            lives = 7;
            myWord = new Word(randomWord[Math.floor(Math.random()*randomWord.length)]);
            play();
        } else {
            console.log("Goodbye!");
        }
    })
}