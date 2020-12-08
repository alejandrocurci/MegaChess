const Horse = require('../core/horse');
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

myBoard[11][2] = "h";
myBoard[9][1] = "B";
myBoard[10][4] = "R";
myBoard[12][4] = "R";
myBoard[13][3] = "Q";
myBoard[12][0] = "H";

myBoard[4][0] = "h";
myBoard[2][1] = "k";
myBoard[3][2] = "Q";
myBoard[5][2] = "p";

myBoard[1][6] = "H";
myBoard[0][4] = "q";
myBoard[0][8] = "r";
myBoard[3][5] = "p";
myBoard[3][7] = "r";
myBoard[2][4] = "b";

myBoard[13][11] = "H";
myBoard[11][12] = "Q";
myBoard[11][10] = "r";
myBoard[15][12] = "p";
myBoard[15][10] = "R";
myBoard[12][9] = "k";
myBoard[14][13] = "k";
myBoard[14][9] = "B";

describe("Horse / getMoves()", function() {
    it("Black horse / should return 8 moves from (11,2)", function() {
        let horse = new Horse("black", 11, 2);
        assert.deepStrictEqual(horse.getMoves(myBoard), [[11,2,9,3,30], [11,2,9,1,400], [11,2,13,3,50], [11,2,13,1,30], [11,2,10,4,600], [11,2,10,0,30], [11,2,12,4,600], [11,2,12,0,300]]);
    })
    it("Black horse / should return 2 moves from (4,0)", function() {
        let horse = new Horse("black", 4, 0);
        assert.deepStrictEqual(horse.getMoves(myBoard), [[4,0,6,1,30], [4,0,3,2,50]]);
    })
    it("Black horse / should not return any move from (4,0)", function() {
        let horse = new Horse("black", 4, 0);
        myBoard[6][1] = "b";
        myBoard[3][2] = "q";        
        assert.deepStrictEqual(horse.getMoves(myBoard), []);
    })
    it("White horse / should return 6 moves from (1,6)", function() {
        let horse = new Horse("white", 1, 6);
        assert.deepStrictEqual(horse.getMoves(myBoard), [[1,6,3,7,600], [1,6,3,5,100], [1,6,0,8,600], [1,6,0,4,50], [1,6,2,8,30], [1,6,2,4,400]]);
    })
    it("White horse / should return 5 moves from (13,11)", function() {
        let horse = new Horse("white", 13, 11);
        assert.deepStrictEqual(horse.getMoves(myBoard), [[13,11,11,10,600], [13,11,15,12,100], [13,11,12,13,30], [13,11,12,9,1000], [13,11,14,13,1000]]);
    })
    it("White horse / should not return any move from (13,11)", function() {
        let horse = new Horse("white", 13, 11);        
        myBoard[11][10] = "R";
        myBoard[15][12] = "P";        
        myBoard[12][9] = "H";
        myBoard[14][13] = "K";
        myBoard[12][13] = "Q";        
        assert.deepStrictEqual(horse.getMoves(myBoard), []);
    })
})
