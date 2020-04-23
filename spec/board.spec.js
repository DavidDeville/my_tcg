import Board from "../src/models/board";
import Hand from "../src/models/hand";

describe("board", function () {
    describe('board extension', function() {
        it("should extends Deck class", function() {
            const board = new Board({cards:[777,7777,"money"], limit: 3});
            expect(board instanceof Hand).toBe(true);
        });
    });
});
