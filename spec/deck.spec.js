import Deck from "../src/models/deck.js";

describe("deck", function () {
  describe("cards count", function () {
    it("should be an integer", function () {
      const config = { cards: ["pouet"] };
      const deck = new Deck(config);
      let numberOfCards = deck.cards[0];
      console.log(numberOfCards);
      expect(numberOfCards).toBe(1);
    });
  });
});
