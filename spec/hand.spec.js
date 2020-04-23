import Hand from "../src/models/hand";

describe("hand", function () {
  describe("adding a card", function () {
    it("shouldn't add if limit excedeed", function () {
      const config = { cards: [1,2,3,4,5], limit: 5 };
      const hand = new Hand(config);
      expect(hand.addCard()).toBe(false);
    });

    it("should add a card to the hand", function () {
      const config = { cards: [666,777,888], limit: 3 };
      const hand = new Hand(config);
      expect(hand.addCard()).toBe(true);
    });
  });

  describe("remove a card", function () {});

  describe("get all cards", function () {});

  describe("get cards count", function () {});
});
