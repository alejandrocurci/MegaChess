const Pawn = require('../core/pawn');
const assert = require('assert');

let myBoard = [];
let aux = [];
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        aux[j] = " ";
    }
    myBoard.push(aux);
    aux = [];   
}

myBoard[6][6] = "p";
myBoard[7][5] = "q";
myBoard[7][6] = "h";
myBoard[7][7] = "b";

myBoard[5][15] = "p";
myBoard[6][14] = "r";
myBoard[6][15] = "k";

describe("Pawn / Black / getMoves()", function() {
    it("should not return any move from (6,6)", function() {
        let pawn = new Pawn("black", 6, 6);
        assert.deepStrictEqual(pawn.getMoves(myBoard), []);
    })   
    it("should return 1 move from (6,6) (move down)", function() {
        let pawn = new Pawn("black", 6, 6);
        myBoard[7][6] = " ";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[6,6,7,6,500]]);
    })  
    it("should return 1 move from (6,6) (eat down-left)", function() {
        let pawn = new Pawn("black", 6, 6);
        myBoard[7][6] = "h";
        myBoard[7][5] = "B";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[6,6,7,5,400]]);
    }) 
    it("should return 1 move from (6,6) (eat down-right)", function() {
        let pawn = new Pawn("black", 6, 6);
        myBoard[7][5] = "q";
        myBoard[7][7] = "H";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[6,6,7,7,300]]);
    }) 
    it("should not return any move from (5,15)", function() {
        let pawn = new Pawn("black", 5, 15);
        assert.deepStrictEqual(pawn.getMoves(myBoard), []);
    })   
    it("should return 2 moves from (5,15)", function() {
        let pawn = new Pawn("black", 5, 15);
        myBoard[6][15] = " ";
        myBoard[6][14] = "Q";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[5,15,6,15,200], [5,15,6,14,50]]);
    })
})

myBoard[9][13] = "P";
myBoard[8][12] = "R";
myBoard[8][13] = "B";
myBoard[8][14] = "H";

myBoard[10][0] = "P";
myBoard[9][0] = "R";
myBoard[9][1] = "K";

describe("Pawn / White / getMoves()", function() {
    it("should not return any move from (9,13)", function() {
        let pawn = new Pawn("white", 9, 13);
        assert.deepStrictEqual(pawn.getMoves(myBoard), []);
    })   
    it("should return 1 move from (9,13) (move up)", function() {
        let pawn = new Pawn("white", 9, 13);
        myBoard[8][13] = " ";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[9,13,8,13,500]]);
    })  
    it("should return 1 move from (9,13) (eat up-left)", function() {
        let pawn = new Pawn("white", 9, 13);
        myBoard[8][13] = "B";
        myBoard[8][12] = "r";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[9,13,8,12,600]]);
    }) 
    it("should return 1 move from (9,13) (eat up-right)", function() {
        let pawn = new Pawn("white", 9, 13);
        myBoard[8][12] = "R";
        myBoard[8][14] = "k";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[9,13,8,14,1000]]);
    }) 
    it("should not return any move from (10,0)", function() {
        let pawn = new Pawn("white", 10, 0);
        assert.deepStrictEqual(pawn.getMoves(myBoard), []);
    })   
    it("should return 2 moves from (10,0)", function() {
        let pawn = new Pawn("white", 10, 0);
        myBoard[9][0] = " ";
        myBoard[9][1] = "h";
        assert.deepStrictEqual(pawn.getMoves(myBoard), [[10,0,9,0,200], [10,0,9,1,300]]);
    })
})
