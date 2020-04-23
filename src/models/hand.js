export default class Hand {
  constructor(config) {
    this.limit = config.limit;
    this.cards = config.cards;
  }

  /**
   * Function to add a card into the player's hand
   *
   * @param {int|string} card - the card to add
   */
  addCard(card) {
    if (this.cards.length > this.limit) {
      return false;
    }
    if (this.limit === undefined) {
      this.limit = 7;
    }
    this.cards.splice(this.cards.length + 1, 0, card);
    return true;
  }

  /**
   * Function to remove a card from player's hand
   *
   * @param {int} position - the position of the element to remove
   */
  removeCard(position) {
    if (this.cards.length <= 0 || typeof this.cards[position] === undefined) {
      //position = false;
      return false;
    }
    //console.log("la main courante : " + this.cards);
    let removedCard = this.cards[position];
    this.cards.splice(position, 1);
    return removedCard;
  }

  getAllCards() {
      return this.cards;
  }

  getCardsCount() {
      return this.cards.length;
  }
}
