class Horse {
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
        let enemyPoints = [100, 600, 300, 400, 50, 1000, 30];
        // up(2)-right(1)        
        if(this.x>1 && this.y<15 && enemyPieces.indexOf(b[this.x-2][this.y+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-2][this.y+1])];
            let oneMove = [this.x, this.y, this.x-2, this.y+1, points];
            possibleMoves.push(oneMove);
        }
        // up(2)-left(1)        
        if(this.x>1 && this.y>0 && enemyPieces.indexOf(b[this.x-2][this.y-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-2][this.y-1])];
            let oneMove = [this.x, this.y, this.x-2, this.y-1, points];
            possibleMoves.push(oneMove);
        }
        // down(2)-right(1)
        if(this.x<14 && this.y<15 && enemyPieces.indexOf(b[this.x+2][this.y+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+2][this.y+1])];
            let oneMove = [this.x, this.y, this.x+2, this.y+1, points];
            possibleMoves.push(oneMove);
        }
        // down(2)-left(1)
        if(this.x<14 && this.y>0 && enemyPieces.indexOf(b[this.x+2][this.y-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+2][this.y-1])];
            let oneMove = [this.x, this.y, this.x+2, this.y-1, points];
            possibleMoves.push(oneMove);
        }
        // up(1)-right(2)        
        if(this.x>0 && this.y<14 && enemyPieces.indexOf(b[this.x-1][this.y+2])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-1][this.y+2])];
            let oneMove = [this.x, this.y, this.x-1, this.y+2, points];
            possibleMoves.push(oneMove);
        }
        // up(1)-left(2)       
        if(this.x>0 && this.y>1 && enemyPieces.indexOf(b[this.x-1][this.y-2])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x-1][this.y-2])];
            let oneMove = [this.x, this.y, this.x-1, this.y-2, points];;
            possibleMoves.push(oneMove);
        }
        // down(1)-right(2)       
        if(this.x<15 && this.y<14 && enemyPieces.indexOf(b[this.x+1][this.y+2])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+1][this.y+2])];
            let oneMove = [this.x, this.y, this.x+1, this.y+2, points];
            possibleMoves.push(oneMove);
        }
        // down(1)-left(2)        
        if(this.x<15 && this.y>1 && enemyPieces.indexOf(b[this.x+1][this.y-2])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[this.x+1][this.y-2])];
            let oneMove = [this.x, this.y, this.x+1, this.y-2, points];
            possibleMoves.push(oneMove);
        }
        return possibleMoves;          
    } 
}
module.exports = Horse;