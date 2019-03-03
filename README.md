# Word-Guess-Command-Line
A Word Guess Game played on the command line using node.js
Starting the application via `node Index.js`. This will automatically start a new game.
The command line will show the length of the word in underscores.
Type a single letter to guess it (if more than one letter is typed, it will take only the first letter).
If the word contains the letter, the word will be displayed with all instances of the guessed letter filled in.
If the word does not contain the guessed letter, you will lose a life.
The game ends when either all the letters have been correctly guessed (and you win) or you run out of lives (you lose).
The total number of losses and wins are displayed upon game completion, and you are asked if you would like to play again.