const Strategy = require('../core/strategy');
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
myBoard[15][6] = "k";
myBoard[14][3] = "r";
myBoard[9][3] = "B";
myBoard[14][7] = "Q";
let strBoard = "";
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        strBoard += myBoard[i][j];
    } 
}

describe("Strategy / Black / strategy()", function() {    
    it("strategy 1 / should decide to eat the white bishop", function() {
        let strategy1 = new Strategy(strBoard, "black", 1);              
        assert.deepStrictEqual(strategy1.strategy(), [14,3,9,3,400]);
    })
    it("strategy 2 / should decide to eat the white king", function() {
        let strategy2 = new Strategy(strBoard, "black", 2);                
        assert.deepStrictEqual(strategy2.strategy(), [14,3,14,7,10]);
    })
    it("strategy 2 / should work despite having my enemy with no moves left", function() {
        myBoard[15][6] = " ";
        myBoard[14][3] = " ";
        myBoard[9][3] = " ";
        myBoard[14][7] = " ";
        myBoard[8][8] = "h";
        myBoard[9][8] = "P";
        myBoard[10][3] = "q";
        myBoard[11][3] = "P";
        strBoard = "";
        for(let i=0; i<16; i++) {
            for(let j=0; j<16; j++) {
                strBoard += myBoard[i][j];
            } 
        }
        let strategy3 = new Strategy(strBoard, "black", 2);                
        assert.deepStrictEqual(strategy3.strategy(), [10,3,11,3,100]);
    })
})

let newBoard = [];
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        aux[j] = " ";
    }
    newBoard.push(aux);
    aux = [];   
}
newBoard[2][12] = "h";
newBoard[4][4] = "r";
newBoard[4][5] = "r";
newBoard[3][11] = "Q";
newBoard[5][6] = "K";
let otherStrBoard = "";
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        otherStrBoard += newBoard[i][j];
    } 
}

describe("Strategy / White / strategy()", function() {    
    it("strategy 1 / should decide to eat the black rook", function() {
        let strategy1 = new Strategy(otherStrBoard, "white", 1);             
        assert.deepStrictEqual(strategy1.strategy(), [5,6,4,5,600]);
    })
    it("strategy 2 / should decide to eat the white horse", function() {
        let strategy2 = new Strategy(otherStrBoard, "white", 2);             
        assert.deepStrictEqual(strategy2.strategy(), [3,11,2,12,240]);
    })
    it("strategy 2 / should work despite having my enemy with no moves left", function() {
        newBoard[2][12] = " ";
        newBoard[4][4] = " ";
        newBoard[4][5] = " ";
        newBoard[3][11] = " ";
        newBoard[5][6] = " ";
        newBoard[4][3] = "p";
        newBoard[5][3] = "B";
        newBoard[6][12] = "p";
        newBoard[7][12] = "R";
        otherStrBoard = "";
        for(let i=0; i<16; i++) {
            for(let j=0; j<16; j++) {
                otherStrBoard += newBoard[i][j];
            } 
        }
        let strategy3 = new Strategy(otherStrBoard, "white", 2);             
        assert.deepStrictEqual(strategy3.strategy(), [7,12,6,12,100]);
    })
})