import ModelFactory from './factory';
import Pawn from "./pawn";
import Cemetary from "./cemetary";
import Board from "./board";

export default class Player extends Pawn {

    constructor(config) {
        super(config);
        this.type = config.type;
        this.cemetary = new Cemetary({cards: []});
        this.board = new Board({cards: []});
        this.deck = ModelFactory.get('deck');
    }

    shuffle(deck = "deck") {

    }

    draw () {
        return this.deck.draw();
    }

    playCard(position) {

    }

    discard(position) {

    }

    attack(position, target) {

    }

}