
class Board {
    constructor(letters) {
        this.letters = letters;
    }
    getBoard() {
        let arr = [];
        let myBoard = [];
        for(let i=0; i<16; i++) {
            for (let j=0; j<16; j++) {
                arr[j] = this.letters.charAt(16*i+j);
            }
            myBoard.push(arr);
            arr = [];
        }
        return myBoard;
    }
    printBoard() {        
        let b = this.getBoard();
        let str = "";
        for(let i=0; i<16; i++) {
            for (let j=0; j<16; j++) {
                str += "["+b[i][j]+"] ";
            }
            console.log(str);
            str = "";
        }
    }
   static updateBoard(board, move) {
       board[move[2]][move[3]] = board[move[0]][move[1]];
       board[move[0]][move[1]] = " ";
   }
}

module.exports = Board;
