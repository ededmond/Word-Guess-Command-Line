class Letter {
    constructor(char) {
        this.letter = char;
        this.guessed = false;
    }

    getLetter() {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    }

    guess(char) {
        if (this.letter.toLowerCase() === char.toLowerCase()) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;