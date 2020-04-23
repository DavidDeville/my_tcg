import Hand from "../src/models/hand";

describe("hand", function () {
  describe("adding a card", function () {
    it("shouldn't add if limit excedeed", function () {
      const config = { cards: [1, 2, 3, 4, 5], limit: 5 };
      const hand = new Hand(config);
      hand.addCard("trololo");
      expect(hand.addCard()).toBe(false);
    });

    it("should add a card to the hand", function () {
      const config = { cards: [666, 777, 888], limit: 4 };
      const hand = new Hand(config);
      hand.addCard("wesh");
      expect(hand.addCard()).toBe(true);
    });
  });

  describe("remove a card", function () {
    it("position must be valid", function () {
      const config = { cards: ["wesh", "trololo"] };
      const hand = new Hand(config);
      expect(hand.removeCard(2)).toBe(undefined);
    });

    it("cards in hand shouldn't be negative", function () {
      const config = { cards: [] };
      const hand = new Hand(config);
      expect(hand.removeCard()).toBe(false);
    });

    it("should remove the card", function () {
      const config = { cards: ["wesh", "trololo"] };
      const hand = new Hand(config);
      expect(hand.removeCard(1)).toEqual("trololo");
    });
  });

  describe("get all cards", function () {
    it("cards in hand", function () {
      const config = { cards: ["wesh", "trololo"] };
      const hand = new Hand(config);
      expect(hand.getAllCards()).toEqual(["wesh", "trololo"]);
    });
  });

  describe("get cards count", function () {
    it("numbers of cards in hand", function () {
      const config = { cards: ["wesh", "trololo"] };
      const hand = new Hand(config);
      expect(hand.getCardsCount()).toBe(2);
    });
  });
});
