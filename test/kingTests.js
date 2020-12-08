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

myBoard[4][3] = "k";
myBoard[3][3] = "Q";
myBoard[5][3] = "R";
myBoard[4][2] = "H";
myBoard[3][2] = "B";
myBoard[3][4] = "B";
myBoard[5][4] = "Q";

myBoard[0][13] = "k";
myBoard[1][13] = "h";
myBoard[0][14] = "r";
myBoard[1][12] = "Q";
myBoard[1][14] = "b";

myBoard[10][11] = "K";
myBoard[9][11] = "q";
myBoard[11][11] = "r";
myBoard[10][12] = "h";
myBoard[9][12] = "b";
myBoard[11][10] = "b";

myBoard[15][0] = "K";
myBoard[15][1] = "R";
myBoard[14][1] = "q";

describe("King / getMoves()", function() {    
    it("Black king / should return 8 moves from (4,3)", function() {
        let king = new King("black", 4, 3);
        assert.deepStrictEqual(king.getMoves(myBoard), [[4,3,3,3,50], [4,3,5,3,600], [4,3,4,4,100], [4,3,4,2,300], [4,3,3,2,400], [4,3,3,4,400], [4,3,5,2,100], [4,3,5,4,50]]);
    })
    it("Black king / should return 2 moves from (0,13)", function() {
        let king = new King("black", 0, 13);
        assert.deepStrictEqual(king.getMoves(myBoard), [[0,13,0,12,100], [0,13,1,12,50]]);
    })
    it("Black king / should not return any move from (4,3)", function() {
        let king = new King("black", 4, 3);        
        myBoard[4][2] = "h";
        myBoard[4][4] = "p";
        myBoard[3][2] = "b";
        myBoard[3][3] = "q";
        myBoard[3][4] = "b";
        myBoard[5][2] = "r";
        myBoard[5][3] = "r";
        myBoard[5][4] = "q";
        assert.deepStrictEqual(king.getMoves(myBoard), []);
    })
    it("White king / should return 8 moves from (10,11)", function() {
        let king = new King("white", 10, 11);
        assert.deepStrictEqual(king.getMoves(myBoard), [[10,11,9,11,50], [10,11,11,11,600], [10,11,10,12,300], [10,11,10,10,100], [10,11,9,10,100], [10,11,9,12,400], [10,11,11,10,400], [10,11,11,12,100]]);
    })
    it("White king / should return 2 moves from (15,0)", function() {
        let king = new King("white", 15, 0);
        assert.deepStrictEqual(king.getMoves(myBoard), [[15,0,14,0,100], [15,0,14,1,50]]);
    })
    it("White king / should not return any move from (10,11)", function() {
        let king = new King("white", 10, 11);
        myBoard[9][10] = "Q";
        myBoard[9][11] = "Q";
        myBoard[9][12] = "B";
        myBoard[10][10] = "H";
        myBoard[10][12] = "H";
        myBoard[11][10] = "P";
        myBoard[11][11] = "R";
        myBoard[11][12] = "K";        
        assert.deepStrictEqual(king.getMoves(myBoard), []);
    })

})