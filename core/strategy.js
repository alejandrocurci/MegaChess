const Board = require('./board');
const Game = require('./game');

class Strategy {
    constructor(board, turn, tactic) {
        this.board = board;
        this.turn = turn;
        this.tactic = tactic;
    }
    strategy() {
        let b = new Board(this.board);                
        let myGame = new Game(b.getBoard(), this.turn);
        let myMoves = myGame.generateAllMoves();
        switch(this.tactic) {
            // play by taking only my possible moves into account
            case 1:                
                return myGame.chooseBestMove(myMoves);
                break;  
            // play by taking my moves and my enemy response into account             
            case 2:                
                for(let m=0; m<myMoves.length; m++) {
                    let newBoard = b.getBoard();
                    Board.updateBoard(newBoard, myMoves[m]);                    
                    let enemyGame;
                    if(this.turn=="white") {
                        enemyGame = new Game(newBoard, "black");
                    } else {
                        enemyGame = new Game(newBoard, "white");
                    }
                    if(enemyGame.generateAllMoves().length>=1) {
                        let bestResponse = enemyGame.chooseBestMove(enemyGame.generateAllMoves());
                        myMoves[m][4] -= bestResponse[4];
                    }         
                }
                return myGame.chooseBestMove(myMoves);
                break;              
        }
    }
}
module.exports = Strategy;