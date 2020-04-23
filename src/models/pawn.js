import EventManager from "../eventManager";

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        super();
        this._life = life;
        this._strength = strength;
        this._def = def;
    }

    /**
     * Function to know the current HP of our pawn
     * 
     * @return int - the health points
     */
    getLife() {
        if(this._life < 0) {
            return false;
        }
        return this._life;
    }

    /**
     * Function to know the current strength of our pawn
     * 
     * @return int - the strength
     */
    getStrength() {
        if(this._strength < 0) {
            return false;
        }
        return this._strength;
    }

    /**
     * Function to know the current defense of our pawn
     * 
     * @return int - the defense
     */
    getDef() {
        if(this._def < 0) {
            return false;
        }
        return this._def;
    }

    /**
     * Function to know the current strength of our pawn
     * 
     * @param {object} target - our target to attack
     */
    attack(target) {
        target.receiveAttack(this);
    }

    /**
     * Function that handles the damage taken
     * 
     * @param {object} opponent - our opponent
     * @param {object} strikeBack - our possible counter attack
     */
    receiveAttack(opponent, strikeBack = false) {
        if(strikeBack === true) {
            this._life = this._life - opponent._def;
        }
        else {
            this._life = this._life - opponent._strength;
            opponent.receiveAttack(this, true);
        }
    }
}