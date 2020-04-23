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
   * Tests of insertAt method
   */
  describe("insertAt", function() {
    it("should insert a new card", function() {
      const config = { cards: [555,777,888]};
      const deck = new Deck(config);
      deck.insertAt("trololo", deck.cards.length+1);
      console.log(deck.cards);
      expect(deck.cards.length).toBe(4);
    });
  });

  /**
   * Tests of draw method
   */
  describe("draw", function() {
    it("shouldn't be possible to draw an empty deck", function() {
      const config = { cards: [] };
      const deck = new Deck(config);
      expect(deck.draw()).toBe(false);
    });
    it("should remove the card", function() {
      const config = { cards: [777,888,999] };
      const deck = new Deck(config);
      deck.draw();
      expect(deck.cards.length).toBe(2);
    });
    it("should return drawn card", function() {
      const config = { cards: [777,888,999] };
      const deck = new Deck(config);
      expect(deck.draw()).toBe(777);
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
