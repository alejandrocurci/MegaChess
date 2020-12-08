const Queen = require('../core/queen');
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

myBoard[11][11] = "q";
myBoard[10][10] = "b";
myBoard[10][11] = "h";
myBoard[10][12] = "q";
myBoard[11][12] = "r";
myBoard[11][10] = "b";
myBoard[12][10] = "h";
myBoard[12][11] = "q";
myBoard[12][12] = "r";

describe("Queen / Black / getMoves()", function() {
    it("should not return any moves from (11,11)", function() {
        let queen = new Queen("black", 11, 11);               
        assert.deepStrictEqual(queen.getMoves(myBoard), []);
    })
    it("should return 4 moves from (11,11) (upward)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[10][11] = " ";
        myBoard[7][11] = "H";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,10,11,5], [11,11,9,11,5], [11,11,8,11,5], [11,11,7,11,300]]);
    })
    it("should return 4 moves from (11,11) (downward)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[10][11] = "h";
        myBoard[12][11] = " ";
        myBoard[15][11] = "Q";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,12,11,5], [11,11,13,11,5], [11,11,14,11,5], [11,11,15,11,50]]);
    })
    it("should return 4 moves from (11,11) (leftward)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[12][11] = "q";
        myBoard[11][10] = " ";
        myBoard[11][7] = "B";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,11,10,5], [11,11,11,9,5], [11,11,11,8,5], [11,11,11,7,400]]);
    })
    it("should return 4 moves from (11,11) (rightward)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[11][10] = "q";
        myBoard[11][12] = " ";
        myBoard[11][15] = "R";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,11,12,5], [11,11,11,13,5], [11,11,11,14,5], [11,11,11,15,600]]);
    })
    it("should return 4 moves from (11,11) (up-left)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[11][12] = "k";
        myBoard[10][10] = " ";
        myBoard[7][7] = "R";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,10,10,5], [11,11,9,9,5], [11,11,8,8,5], [11,11,7,7,600]]);
    })
    it("should return 4 moves from (11,11) (up-right)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[10][10] = "b";
        myBoard[10][12] = " ";
        myBoard[7][15] = "H";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,10,12,5], [11,11,9,13,5], [11,11,8,14,5], [11,11,7,15,300]]);
    })
    it("should return 4 moves from (11,11) (down-left)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[10][12] = "h";
        myBoard[12][10] = " ";
        myBoard[15][7] = "Q";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,12,10,5], [11,11,13,9,5], [11,11,14,8,5], [11,11,15,7,50]]);
    })
    it("should return 4 moves from (11,11) (down-right)", function() {
        let queen = new Queen("black", 11, 11);
        myBoard[12][10] = "r";
        myBoard[12][12] = " ";
        myBoard[15][15] = "K";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[11,11,12,12,5], [11,11,13,13,5], [11,11,14,14,5], [11,11,15,15,1000]]);        
    })    
})

myBoard[4][4] = "Q";
myBoard[3][3] = "B";
myBoard[3][4] = "H";
myBoard[3][5] = "Q";
myBoard[4][3] = "R";
myBoard[4][5] = "B";
myBoard[5][3] = "H";
myBoard[5][4] = "Q";
myBoard[5][5] = "R";

describe("Queen / White / getMoves()", function() {
    it("should not return any moves from (4,4)", function() {
        let queen = new Queen("white", 4, 4);               
        assert.deepStrictEqual(queen.getMoves(myBoard), []);
    })
    it("should return 4 moves from (4,4) (upward)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[3][4] = " ";
        myBoard[0][4] = "h";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,3,4,5], [4,4,2,4,5], [4,4,1,4,5], [4,4,0,4,300]]);
    })
    it("should return 4 moves from (4,4) (downward)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[3][4] = "B";
        myBoard[5][4] = " ";
        myBoard[8][4] = "r";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,5,4,5], [4,4,6,4,5], [4,4,7,4,5], [4,4,8,4,600]]);
    })
    it("should return 4 moves from (4,4) (leftward)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[5][4] = "H";
        myBoard[4][3] = " ";
        myBoard[4][0] = "k";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,4,3,5], [4,4,4,2,5], [4,4,4,1,5], [4,4,4,0,1000]]);
    })
    it("should return 4 moves from (4,4) (rightward)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[4][3] = "B";
        myBoard[4][5] = " ";
        myBoard[4][8] = "q";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,4,5,5], [4,4,4,6,5], [4,4,4,7,5], [4,4,4,8,50]]);
    })
    it("should return 4 moves from (4,4) (up-left)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[4][5] = "R";
        myBoard[3][3] = " ";
        myBoard[0][0] = "b";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,3,3,5], [4,4,2,2,5], [4,4,1,1,5], [4,4,0,0,400]]);
    })
    it("should return 4 moves from (4,4) (up-right)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[3][3] = "P";
        myBoard[3][5] = " ";
        myBoard[0][8] = "p";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,3,5,5], [4,4,2,6,5], [4,4,1,7,5], [4,4,0,8,100]]);
    })
    it("should return 4 moves from (4,4) (down-left)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[3][5] = "H";
        myBoard[5][3] = " ";
        myBoard[8][0] = "p";
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,5,3,5], [4,4,6,2,5], [4,4,7,1,5], [4,4,8,0,100]]);
    })
    it("should return 4 moves from (4,4) (down-right)", function() {
        let queen = new Queen("white", 4, 4);
        myBoard[5][3] = "B";
        myBoard[5][5] = " ";
        myBoard[7][7] = " ";        
        myBoard[8][8] = "q";        
        assert.deepStrictEqual(queen.getMoves(myBoard), [[4,4,5,5,5], [4,4,6,6,5], [4,4,7,7,5], [4,4,8,8,50]]);
    })   
})