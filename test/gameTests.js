const Game = require('../core/game');
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

myBoard[0][15] = "k";
myBoard[5][0] = "p";
myBoard[5][4] = "p";
myBoard[5][8] = "p";
myBoard[9][4] = "q";
myBoard[10][1] = "r";
myBoard[12][6] = "h";
myBoard[13][0] = "b";

myBoard[9][1] = "P";
myBoard[9][3] = "P";
myBoard[9][7] = "R";
myBoard[10][5] = "P";
myBoard[11][2] = "B";
myBoard[11][4] = "H";
myBoard[12][1] = "P";

describe("Game / Black Turn / generateAllMoves()", function() {    
    it("should generate 43 possible moves ", function() {
        let game = new Game(myBoard, "black");        
        assert.strictEqual(game.generateAllMoves().length, 43);
    })
    it("should return best move [9,4,9,7,600]", function() {
        let game = new Game(myBoard, "black");
        let allMoves = game.generateAllMoves();
        let bestMove = game.chooseBestMove(allMoves);        
        assert.deepStrictEqual(bestMove, [9,4,9,7,600]);
    })
})

let newBoard = [];
aux = [];
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        aux[j] = " ";
    }
    newBoard.push(aux);
    aux = [];   
}

newBoard[0][3] = "R";
newBoard[1][7] = "Q";
newBoard[1][10] = "H";
newBoard[9][2] = "B";
newBoard[9][12] = "P";
newBoard[15][7] = "K";

newBoard[0][5] = "k";
newBoard[0][8] = "h";
newBoard[1][6] = "b";
newBoard[2][6] = "p";
newBoard[2][7] = "p";
newBoard[2][8] = "p";
newBoard[7][4] = "r";
newBoard[8][1] = "q";
newBoard[12][5] = "h";

describe("Game / White Turn / generateAllMoves()", function() {    
    it("should generate 49 possible moves ", function() {
        let game = new Game(newBoard, "white");                       
        assert.strictEqual(game.generateAllMoves().length, 49);
    })
    it("should return best move [0,3,0,5,1000]", function() {
        let game = new Game(newBoard, "white");
        let allMoves = game.generateAllMoves();
        let bestMove = game.chooseBestMove(allMoves);        
        assert.deepStrictEqual(bestMove, [0,3,0,5,1000]);
    })
})






