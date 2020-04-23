export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    /**
     * Function that will handle the deck shuffle
     * 
     * @return false - in case the deck is empty, true otherwise
     */
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

    /**
     * Function to insert a new card in the deck
     */
    insertAt(card, position) {
        this.cards.splice(position, 0, card);
    }

    /**
     * Function handling all the drawing logic
     * 
     * @return int|string - the drawed card
     */
    draw () {
        let drawnCard;
        let numberOfCards = this.getCardsCount();
        if(numberOfCards < 1) {
            return false;
        }
        drawnCard = this.cards[0];
        this.cards.shift();
        return drawnCard;
    }

    /**
     * Function that handles the current number of cards in the deck
     * 
     * @return int - the number of cards
     */
    getCardsCount () {
        return this.cards.length;
    }
}