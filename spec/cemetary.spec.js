import Cemetary from "../src/models/cemetary";
import Deck from "../src/models/deck";

describe("cemetary", function() {
    describe("cemetary extension", function() {
        it("should extends Hand class", function() {
            const cemetary = new Cemetary({cards: []});
            expect(cemetary instanceof Deck).toBe(true);
        });
    });
});