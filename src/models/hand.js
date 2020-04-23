export default class Hand {
    constructor (config) {
        this.limit = config.limit;
        this.cards = config.cards;
    }

    addCard (card) {
        if(this.cards.length >= this.limit) {
            return false;
        }
        this.cards.splice(this.cards.length+1, 0, card);
        return true;
    }

    removeCard() {}

    getAllCards() {}

    getCardsCount() {}
}