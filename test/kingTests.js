const King = require('../core/king');
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

myBoard[11][11] = "k";
myBoard[10][10] = "b";
myBoard[10][11] = "h";
myBoard[10][12] = "q";
myBoard[11][12] = "r";
myBoard[11][10] = "b";
myBoard[12][10] = "h";
myBoard[12][11] = "q";
myBoard[12][12] = "r";

let blackKing = new King("black", 11, 11);

describe("King / Black / getMoves()", function() {
    it("should not return any moves from (11,11)", function() {              
        assert.deepStrictEqual(blackKing.getMoves(myBoard), []);
    })
    it("should return 1 move from (11,11) (upward)", function() {
        myBoard[10][11] = "Q";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,10,11,50]]);
    })
    it("should return 1 move from (11,11) (downward)", function() {
        myBoard[10][11] = "h";
        myBoard[12][11] = " ";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,12,11,100]]);
    })
    it("should return 1 move from (11,11) (leftward)", function() {
        myBoard[12][11] = "q";
        myBoard[11][10] = "R";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,11,10,600]]);
    })
    it("should return 1 move from (11,11) (rightward)", function() {
        myBoard[11][10] = "q";
        myBoard[11][12] = "H";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,11,12,300]]);
    })
    it("should return 1 move from (11,11) (up-left)", function() {
        myBoard[11][12] = "k";
        myBoard[10][10] = "P";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,10,10,100]]);
    })
    it("should return 1 move from (11,11) (up-right)", function() {
        myBoard[10][10] = "b";
        myBoard[10][12] = "K";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,10,12,1000]]);
    })
    it("should return 1 move from (11,11) (down-left)", function() {
        myBoard[10][12] = "h";
        myBoard[12][10] = " ";        
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,12,10,100]]);
    })
    it("should return 1 move from (11,11) (down-right)", function() {
        myBoard[12][10] = "r";
        myBoard[12][12] = "B";
        assert.deepStrictEqual(blackKing.getMoves(myBoard), [[11,11,12,12,400]]);        
    })    
})

myBoard[4][4] = "K";
myBoard[3][3] = "B";
myBoard[3][4] = "H";
myBoard[3][5] = "Q";
myBoard[4][3] = "R";
myBoard[4][5] = "B";
myBoard[5][3] = "H";
myBoard[5][4] = "Q";
myBoard[5][5] = "R";

let whiteKing = new King("white", 4, 4);

describe("King / White / getMoves()", function() {
    it("should not return any moves from (4,4)", function() {            
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), []);
    })
    it("should return 1 move from (4,4) (upward)", function() {
        myBoard[3][4] = "b";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,3,4,400]]);
    })
    it("should return 1 move from (4,4) (downward)", function() {
        myBoard[3][4] = "B";
        myBoard[5][4] = " ";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,5,4,100]]);
    })
    it("should return 1 move from (4,4) (leftward)", function() {
        myBoard[5][4] = "H";
        myBoard[4][3] = "p";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,4,3,100]]);
    })
    it("should return 1 move from (4,4) (rightward)", function() {
        myBoard[4][3] = "B";
        myBoard[4][5] = "h";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,4,5,300]]);
    })
    it("should return 1 move from (4,4) (up-left)", function() {
        myBoard[4][5] = "R";
        myBoard[3][3] = "r";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,3,3,600]]);
    })
    it("should return 1 move from (4,4) (up-right)", function() {
        myBoard[3][3] = "P";
        myBoard[3][5] = "q";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,3,5,50]]);
    })
    it("should return 1 move from (4,4) (down-left)", function() {
        myBoard[3][5] = "H";
        myBoard[5][3] = "k";
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,5,3,1000]]);
    })
    it("should return 1 move from (4,4) (down-right)", function() {
        myBoard[5][3] = "B";
        myBoard[5][5] = " ";        
        assert.deepStrictEqual(whiteKing.getMoves(myBoard), [[4,4,5,5,100]]);
    })   
})