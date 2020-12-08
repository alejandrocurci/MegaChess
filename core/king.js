class King {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;        
    }
    getMoves(b) {
        let possibleMoves = [];
        let enemyPieces;
        let points;
        if(this.color=="white") {
            enemyPieces = ["p","r","h","b","q","k"," "];
        } else if(this.color=="black") {
            enemyPieces = ["P","R","H","B","Q","K"," "];
        }              
        let enemyPoints = [100, 600, 300, 400, 50, 1000, 100];
        // move/eat upwards        
        if(this.x>0 && enemyPieces.indexOf(b[this.x-1][this.y])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-1][this.y])];
            let oneMove = [this.x, this.y, this.x-1, this.y, points];
            possibleMoves.push(oneMove);
        }
        // move/eat downwards       
        if(this.x<15 && enemyPieces.indexOf(b[this.x+1][this.y])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+1][this.y])];
            let oneMove = [this.x, this.y, this.x+1, this.y, points];
            possibleMoves.push(oneMove);
        }
        // move/eat rightwards        
        if(this.y<15 && enemyPieces.indexOf(b[this.x][this.y+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x][this.y+1])];
            let oneMove = [this.x, this.y, this.x, this.y+1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat leftwards        
        if(this.y>0 && enemyPieces.indexOf(b[this.x][this.y-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x][this.y-1])];
            let oneMove = [this.x, this.y, this.x, this.y-1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards up-left        
        if(this.x>0 && this.y>0 && enemyPieces.indexOf(b[this.x-1][this.y-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-1][this.y-1])];
            let oneMove = [this.x, this.y, this.x-1, this.y-1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards up-right        
        if(this.x>0 && this.y<15 && enemyPieces.indexOf(b[this.x-1][this.y+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-1][this.y+1])];
            let oneMove = [this.x, this.y, this.x-1, this.y+1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards down-left
        if(this.x<15 && this.y>0 && enemyPieces.indexOf(b[this.x+1][this.y-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+1][this.y-1])];
            let oneMove = [this.x, this.y, this.x+1, this.y-1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards down-right        
        if(this.x<15 && this.y<15 && enemyPieces.indexOf(b[this.x+1][this.y+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+1][this.y+1])];
            let oneMove = [this.x, this.y, this.x+1, this.y+1, points];
            possibleMoves.push(oneMove);
        }
        return possibleMoves;          
    } 
}
module.exports = King;