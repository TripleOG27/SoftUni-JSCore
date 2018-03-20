let result = (function () {
    const suits = {
        'S':'\u2660',
        'H':'\u2665',
        'D':'\u2666',
        'C':'\u2663'
    }
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    class Card {
        constructor(face,suit) {
            this.face = face
            this.suit = suit
        }
        // noinspection JSAnnotator
        set face(f){
            if(!faces.includes(f)){
            throw new TypeError("Invalid card face: "+f)
            }
            this._face = f
        }
        get face(){
           return this._face
        }
        // noinspection JSAnnotator
        set suit(s){
            if(!Object.values(suits).includes(s)){
                throw new TypeError("Invalid card suit: "+s)
            }
            this._suit = s
        }
        get suit(){
            return this._suit
        }
        toString(){
            return this._face + this._suit
        }
    }
return {suits,Card}
}())
let card = result.Card
let suit = result.suits

let card1 = new card('3',suit.D)
console.log(card1);