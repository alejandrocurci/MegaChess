const Bishop = require('../core/bishop');
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

myBoard[11][4] = "b";
myBoard[10][3] = "b";
myBoard[10][5] = "h";
myBoard[12][3] = "q";
myBoard[12][5] = "r";

myBoard[3][12] = "B";
myBoard[2][11] = "H";
myBoard[2][13] = "B";
myBoard[4][11] = "Q";
myBoard[4][13] = "R";

describe("Bishop / getMoves()", function() {
    it("Black bishop / should not return any move from (11,4)", function() {
        let bishop = new Bishop("black", 11, 4);        
        assert.deepStrictEqual(bishop.getMoves(myBoard), []);
    })
    it("Black bishop / should return 4 moves from (11,4) (up-left)", function() {
        let bishop = new Bishop("black", 11, 4);
        myBoard[10][3] = " ";
        myBoard[7][0] = "H";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[11,4,10,3,40], [11,4,9,2,40], [11,4,8,1,40], [11,4,7,0,300]]);
    })
    it("Black bishop / should return 4 moves from (11,4) (up-right)", function() {
        let bishop = new Bishop("black", 11, 4);
        myBoard[10][3] = "b";
        myBoard[10][5] = " ";
        myBoard[7][8] = "Q";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[11,4,10,5,40], [11,4,9,6,40], [11,4,8,7,40], [11,4,7,8,50]]);
    })
    it("Black bishop / should return 4 moves from (11,4) (down-left)", function() {
        let bishop = new Bishop("black", 11, 4);
        myBoard[10][5] = "h";
        myBoard[12][3] = " ";
        myBoard[15][0] = "B";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[11,4,12,3,40], [11,4,13,2,40], [11,4,14,1,40], [11,4,15,0,400]]);
    })
    it("Black bishop / should return 4 moves from (11,4) (down-right)", function() {
        let bishop = new Bishop("black", 11, 4);
        myBoard[12][3] = "q";
        myBoard[12][5] = " ";
        myBoard[15][8] = "R";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[11,4,12,5,40], [11,4,13,6,40], [11,4,14,7,40], [11,4,15,8,600]]);
    })
    it("White bishop / should not return any move from (3,12)", function() {
        let bishop = new Bishop("white", 3, 12);        
        assert.deepStrictEqual(bishop.getMoves(myBoard), []);
    })
    it("White bishop / should return 3 moves from (3,12) (up-left)", function() {
        let bishop = new Bishop("white", 3, 12);
        myBoard[2][11] = " ";
        myBoard[0][9] = "q";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[3,12,2,11,40], [3,12,1,10,40], [3,12,0,9,50]]);
    })
    it("White bishop / should return 3 moves from (3,12) (up-right)", function() {
        let bishop = new Bishop("white", 3, 12);
        myBoard[2][11] = "H";
        myBoard[2][13] = " ";
        myBoard[0][15] = "b";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[3,12,2,13,40], [3,12,1,14,40], [3,12,0,15,400]]);
    })
    it("White bishop / should return 4 moves from (3,12) (down-left)", function() {
        let bishop = new Bishop("white", 3, 12);
        myBoard[2][13] = "R";
        myBoard[4][11] = " ";
        myBoard[7][8] = "k";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[3,12,4,11,40], [3,12,5,10,40], [3,12,6,9,40], [3,12,7,8,1000]]);
    })
    it("White bishop / should return 3 moves from (3,12) (down-right)", function() {
        let bishop = new Bishop("white", 3, 12);
        myBoard[4][11] = "K";
        myBoard[4][13] = " ";
        myBoard[6][15] = "h";
        assert.deepStrictEqual(bishop.getMoves(myBoard), [[3,12,4,13,40], [3,12,5,14,40], [3,12,6,15,300]]);
    }) 
})