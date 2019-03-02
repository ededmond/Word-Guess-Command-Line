const Letter = require ("./Letter.js");
class Word {
    constructor (input) {
        this.word = [];
        for (let i =0; i < input.length;i++) {
            this.word.push(new Letter(input.charAt(i)));
        };
    }
    show() {
        let showWord = "";
        for (let i=0; i < this.word.length;i++) {
            showWord+= this.word[i].getLetter();
        }
        return showWord;
    }
    guess(letter) {
        let hit = false;
        for (let i=0; i < this.word.length;i++) {
            if (this.word[i].guess(letter)) {
                hit =true;
            }
        }
        return hit;
    }
}
module.exports = Word;