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
myBoard[9][3] = "b";
myBoard[9][1] = "p";
myBoard[13][3] = "q";
myBoard[13][1] = "k";
myBoard[10][4] = "r";
myBoard[10][0] = "h";
myBoard[12][4] = "r";
myBoard[12][0] = "h";

let blackHorse = new Horse("black", 11, 2);

describe("Horse / Black / getMoves()", function() {
    it("should not return any moves from (11,2)", function() {              
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), []);
    })
    it("should return 1 move from (11,2) to (9,3)", function() {
        myBoard[9][3] = "Q";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,9,3,50]]);
    })
    it("should return 1 move from (11,2) to (9,1)", function() {
        myBoard[9][3] = "b";
        myBoard[9][1] = " ";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,9,1,30]]);
    })
    it("should return 1 move from (11,2) to (13,3)", function() {
        myBoard[9][1] = "h";
        myBoard[13][3] = "H";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,13,3,300]]);
    })
    it("should return 1 move from (11,2) to (13,1)", function() {
        myBoard[13][3] = "k";
        myBoard[13][1] = "B";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,13,1,400]]);
    })
    it("should return 1 move from (11,2) to (10,4)", function() {
        myBoard[13][1] = "q";
        myBoard[10][4] = "R";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,10,4,600]]);
    })
    it("should return 1 move from (11,2) to (10,0)", function() {
        myBoard[10][4] = "b";
        myBoard[10][0] = " ";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,10,0,30]]);
    })
    it("should return 1 move from (11,2) to (12,4)", function() {
        myBoard[10][0] = "p";
        myBoard[12][4] = "K";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,12,4,1000]]);
    })
    it("should return 1 move from (11,2) to (12,0)", function() {
        myBoard[12][4] = "k";
        myBoard[12][0] = "Q";        
        assert.deepStrictEqual(blackHorse.getMoves(myBoard), [[11,2,12,0,50]]);
    })        
})

myBoard[5][11] = "H";
myBoard[3][12] = "B";
myBoard[3][10] = "P";
myBoard[7][12] = "Q";
myBoard[7][10] = "K";
myBoard[4][13] = "R";
myBoard[4][9] = "Q";
myBoard[6][13] = "R";
myBoard[6][9] = "H";

let whiteHorse = new Horse("white", 5, 11);

describe("Horse / White / getMoves()", function() {
    it("should not return any moves from (5,11)", function() {              
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), []);
    })
    it("should return 1 move from (5,11) to (3,12)", function() {
        myBoard[3][12] = "q";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,3,12,50]]);
    })
    it("should return 1 move from (5,11) to (3,10)", function() {
        myBoard[3][12] = "B";
        myBoard[3][10] = "p";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,3,10,100]]);
    })
    it("should return 1 move from (5,11) to (7,12)", function() {
        myBoard[3][10] = "H";
        myBoard[7][12] = "h";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,7,12,300]]);
    })
    it("should return 1 move from (5,11) to (7,10)", function() {
        myBoard[7][12] = "K";
        myBoard[7][10] = "b";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,7,10,400]]);
    })
    it("should return 1 move from (5,11) to (4,13)", function() {
        myBoard[7][10] = "Q";
        myBoard[4][13] = "r";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,4,13,600]]);
    })
    it("should return 1 move from (5,11) to (4,9)", function() {
        myBoard[4][13] = "B";
        myBoard[4][9] = " ";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,4,9,30]]);
    })
    it("should return 1 move from (5,11) to (6,13)", function() {
        myBoard[4][9] = "P";
        myBoard[6][13] = "k";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,6,13,1000]]);
    })
    it("should return 1 move from (5,11) to (6,9)", function() {
        myBoard[6][13] = "K";
        myBoard[6][9] = " ";        
        assert.deepStrictEqual(whiteHorse.getMoves(myBoard), [[5,11,6,9,30]]);
    })        
})
