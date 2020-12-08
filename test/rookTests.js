const Rook = require('../core/rook');
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

myBoard[7][3] = "r";
myBoard[8][3] = "b";
myBoard[6][3] = "h";
myBoard[7][2] = "q";
myBoard[7][4] = "r";

myBoard[12][11] = "R";
myBoard[13][11] = "H";
myBoard[11][11] = "B";
myBoard[12][12] = "Q";
myBoard[12][10] = "P";

describe("Rook / getMoves()", function() {
    it("Black rook / should not return any move from (7,3)", function() {
        let rook = new Rook("black", 7, 3); 
        assert.deepStrictEqual(rook.getMoves(myBoard), []);
    })
    it("Black rook / should return 4 moves from (7,3) (rightward)", function() {
        let rook = new Rook("black", 7, 3);
        myBoard[7][4] = " ";
        myBoard[7][7] = "H";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[7,3,7,4,60], [7,3,7,5,60], [7,3,7,6,60], [7,3,7,7,300]]);
    })
    it("Black rook / should return 3 moves from (7,3) (leftward)", function() {
        let rook = new Rook("black", 7, 3);
        myBoard[7][4] = "r";
        myBoard[7][2] = " ";
        myBoard[7][0] = "B";        
        assert.deepStrictEqual(rook.getMoves(myBoard), [[7,3,7,2,60], [7,3,7,1,60], [7,3,7,0,400]]);
    })
    it("Black rook / should return 4 moves from (7,3) (upward)", function() {
        let rook = new Rook("black", 7, 3);
        myBoard[7][2] = "q";
        myBoard[6][3] = " ";
        myBoard[3][3] = "Q";        
        assert.deepStrictEqual(rook.getMoves(myBoard), [[7,3,6,3,60], [7,3,5,3,60], [7,3,4,3,60], [7,3,3,3,50]]);
    })
    it("Black rook / should return 4 moves from (7,3) (downward)", function() {
        let rook = new Rook("black", 7, 3);
        myBoard[6][3] = "h";
        myBoard[8][3] = " ";
        myBoard[11][3] = "P";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[7,3,8,3,60], [7,3,9,3,60], [7,3,10,3,60], [7,3,11,3,100]]);
    })
    it("White rook / should not return any move from (12,11)", function() {
        let rook = new Rook("white", 12, 11);  
        assert.deepStrictEqual(rook.getMoves(myBoard), []);
    })
    it("White rook / should return 4 moves from (12,11) (rightward)", function() {
        let rook = new Rook("white", 12, 11);
        myBoard[12][12] = " ";
        myBoard[12][15] = "q";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[12,11,12,12,60], [12,11,12,13,60], [12,11,12,14,60], [12,11,12,15,50]]);
    })
    it("White rook / should return 4 moves from (12,11) (leftward)", function() {
        let rook = new Rook("white", 12, 11);
        myBoard[12][12] = "Q";
        myBoard[12][10] = " ";
        myBoard[12][7] = "b";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[12,11,12,10,60], [12,11,12,9,60], [12,11,12,8,60], [12,11,12,7,400]]);
    })
    it("White rook / should return 4 moves from (12,11) (upward)", function() {
        let rook = new Rook("white", 12, 11);
        myBoard[12][10] = "P";
        myBoard[11][11] = " ";
        myBoard[8][11] = "r";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[12,11,11,11,60], [12,11,10,11,60], [12,11,9,11,60], [12,11,8,11,600]]);
    })
    it("White rook / should return 3 moves from (12,11) (downward)", function() {
        let rook = new Rook("white", 12, 11);
        myBoard[11][11] = "B";
        myBoard[13][11] = " ";
        myBoard[15][11] = "p";
        assert.deepStrictEqual(rook.getMoves(myBoard), [[12,11,13,11,60], [12,11,14,11,60], [12,11,15,11,100]]);
    })    
})