const Board = require('../core/board');
const assert = require('assert');

let strBoard = "";
let testBoard = [];
let aux = [];

describe("getBoard()", function() {
    it('should get the expected board in an array 16x16', function() {        
        for(let i=0; i<256; i++) {
            strBoard += "p";
        }        
        for(let i=0; i<16; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = "p";
            }
            testBoard[i] = aux;
            aux = [];
        }
        let b = new Board(strBoard);
        assert.deepStrictEqual(b.getBoard(), testBoard);        
    })
    it('should get the expected board in an array 16x16', function() {
        strBoard = "";
        testBoard = [];
        for(let i=0; i<256; i++) {
            strBoard += " ";
        }             
        for(let i=0; i<16; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = " ";
            }
            testBoard[i] = aux;
            aux = [];
        }
        let b = new Board(strBoard);
        assert.deepStrictEqual(b.getBoard(), testBoard);        
    })    
})

describe("updateBoard()", function() {
    it('should update the board with the selected move', function(){
        strBoard = "";
        testBoard = [];
        for(let i=0; i<64; i++) {
            strBoard += "p";
        }
        for(let i=0; i<192; i++) {
            strBoard += " ";
        }        
        for(let i=0; i<4; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = "p";
            }
            testBoard[i] = aux;
            aux = [];
        }
        for(let i=4; i<16; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = " ";
            }
            testBoard[i] = aux;
            aux = [];
        }
        let move = [3, 9, 5, 9];        
        testBoard[3][9] = " ";
        testBoard[5][9] = "p";
        let b = new Board(strBoard);
        let actualBoard = b.getBoard();
        Board.updateBoard(actualBoard, move);
        assert.deepStrictEqual(actualBoard, testBoard);
    })
    it('should update the board with the selected move', function(){
        strBoard = "";
        testBoard = [];
        for(let i=0; i<64; i++) {
            strBoard += "q";
        }
        for(let i=0; i<192; i++) {
            strBoard += " ";
        }        
        for(let i=0; i<4; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = "q";
            }
            testBoard[i] = aux;
            aux = [];
        }
        for(let i=4; i<16; i++) {
            for(let j=0; j<16; j++) {
                aux[j] = " ";
            }
            testBoard[i] = aux;
            aux = [];
        }
        let move = [3, 0, 8, 5];        
        testBoard[3][0] = " ";
        testBoard[8][5] = "q";
        let b = new Board(strBoard);
        let actualBoard = b.getBoard();
        Board.updateBoard(actualBoard, move);
        assert.deepStrictEqual(actualBoard, testBoard);
    })

})




