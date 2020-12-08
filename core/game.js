const Queen = require('./queen');
const Pawn = require('./pawn');
const Rook = require('./rook');
const Bishop = require('./bishop');
const King = require('./king');
const Horse = require('./horse');

class Game {
    constructor(board, turn){
        this.board = board;
        this.turn = turn;
    }    
    generateAllMoves() {
        let allMoves = [];
        let ini = [0, 0, 0, 0, 0];
        allMoves.push(ini);
        let myPieces;
        if(this.turn=="black") {
            myPieces = ["p", "q", "r", "b", "k", "h"];
        } else {
            myPieces = ["P", "Q", "R", "B", "K", "H"];
        }
        for(let i=0; i<16; i++) {
            for(let j=0; j<16; j++) {
                let num = myPieces.indexOf(this.board[i][j]);
                let piece;
                if(num>-1) {
                    switch(num) {
                        case 0:
                            piece = new Pawn(this.turn, i, j);
                            break;
                        case 1:
                            piece = new Queen(this.turn, i, j);
                            break;
                        case 2:
                            piece = new Rook(this.turn, i, j);
                            break;
                        case 3:
                            piece = new Bishop(this.turn, i, j);
                            break;
                        case 4:
                            piece = new King(this.turn, i, j);
                            break;
                        case 5:
                            piece = new Horse(this.turn, i, j);
                            break;
                    }
                    let moves = piece.getMoves(this.board);
                    allMoves = allMoves.concat(moves);
                }
            }
        }
        allMoves.shift();
        return allMoves;
    }    
    chooseBestMove(moves) {
        let aux = moves[0][4];
        let bestMove = moves[0];
        for(let k=0; k<moves.length; k++) {
            if(aux<moves[k][4]) {
                aux = moves[k][4];
                bestMove = moves[k];
            }
        }
        return bestMove;
    }
}
module.exports = Game;