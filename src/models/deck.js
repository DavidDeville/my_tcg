
export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        let shuffledArray = [];
        let i = this.cards.length, j, temp;

        if(this.cards.length < 1) {
            return false;
        }
        while(--i > 0) {
            j = Math.floor(Math.random() * (i+1));
            temp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = temp;
            shuffledArray = this.cards;
        }
        return true;
    }

    draw () {
    }

    getCardsCount () {
    }
}