import Pawn from "../src/models/pawn";

describe("pawn", function() {
    describe("pawn life", function() {
        it("shouldn't be negative", function() {
            let life = -55, strength = 10, def = 15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getLife()).toBe(false);
        });
        it("should return current life", function() {
            let life = 55, strength = 10, def = 15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getLife()).toBe(55);
        });
    });

    describe("pawn strength", function() {
        it("shouldn't be negative", function() {
            let life = 55, strength = -10, def = 15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getStrength()).toBe(false);
        });
        it("should return current strength", function() {
            let life = 55, strength = 10, def = 15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getStrength()).toBe(10);
        });
    });

    describe("pawn def", function() {
        it("shouldn't be negative", function() {
            let life = 55, strength = 10, def = -15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getDef()).toBe(false);
        });
        it("should return current defense", function() {
            let life = 55, strength = 10, def = 15;
            const pawn = new Pawn(life, strength, def);
            expect(pawn.getDef()).toBe(15);
        });
    });

    describe("attack the opponent", function() {
        it('should attack and opponent counter', function() {
            let pawn = new Pawn(50, 20, 10);
            let opponent = new Pawn(40, 10, 5);
            pawn.attack(opponent);
            expect(pawn.getLife()).toBe(45);
            expect(opponent.getLife()).toBe(20);
        });
    });

    describe("counter attack", function() {
        it('should be counter attack only', function() {
            let pawn = new Pawn(50, 20, 10);
            let opponent = new Pawn(40, 10, 5);
            pawn.receiveAttack(opponent);
            expect(pawn.getLife()).toBe(40);
            expect(opponent.getLife()).toBe(30);
        });
    });
});