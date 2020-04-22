import Deck from "../src/models/deck.js";

/**
 * Tests for the Deck Class
 * 
 * Tested methods : shuffle(), insertAt, draw(), getCardsCount() 
 */
describe("deck", function () {

  /**
   * Tests of shuffle method
   */
  describe("shuffle", () => {
    it("cards have been shuffled", () => {
      const config = { cards: [7,10,9,90,12] };
      const deck = new Deck(config);
      deck.shuffle();
      console.log(deck.cards);
      expect(deck.shuffle()).toBe(true);
    });
  });

  /**
   * Tests of getCardsCount method
   */
  describe("cards count", function () {
    it("should be an integer", function () {
      const config = { cards: [777] };
      const deck = new Deck(config);
      let card = deck.cards[0];
      expect(card).toMatch(/^\d+$/);
    });
  });
});
