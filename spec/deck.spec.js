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
  describe("shuffle", function () {
    it("shouldn't shuffle an empty deck", function () {
      const config = { cards: [] };
      const deck = new Deck(config);
      expect(deck.shuffle()).toBe(false);
    });

    it("cards have been shuffled", function () {
      const config = { cards: [7, 10, 9, 90, 12] };
      const deck = new Deck(config);
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
      expect(deck.getCardsCount()).toMatch(/^\d+$/);
    });

    it("shouldn't be negative", function () {
      const config = { cards: [0] };
      const deck = new Deck(config);
      expect(deck.getCardsCount()).toBeGreaterThan(-1);
    });

    it("should return the number of cards", function() {
      const config = { cards: [1,3,5] }
      const deck = new Deck(config);
      expect(deck.getCardsCount()).toBe(3);
    });
  });
});
