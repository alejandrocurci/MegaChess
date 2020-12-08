class Bishop {
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
            enemyPieces = ["p","r","h","b","q","k"];
        } else if(this.color=="black") {
            enemyPieces = ["P","R","H","B","Q","K"];
        }   
        let enemyPoints = [100, 600, 300, 400, 50, 1000];                  
        // move/eat towards up-left
        let m = this.x;
        let n = this.y;
        while (m>0 && n>0 && b[m-1][n-1]==" ") {
            points = 40;
            let oneMove = [this.x, this.y, m-1, n-1, points];
            possibleMoves.push(oneMove);
            m--;
            n--;
        }
        if(m>0 && n>0 && enemyPieces.indexOf(b[m-1][n-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[m-1][n-1])];
            let oneMove = [this.x, this.y, m-1, n-1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards up-right
        m = this.x;
        n = this.y;
        while (m>0 && n<15 && b[m-1][n+1]==" ") {
            points = 40;
            let oneMove = [this.x, this.y, m-1, n+1, points];
            possibleMoves.push(oneMove);
            m--;
            n++;
        }
        if(m>0 && n<15 && enemyPieces.indexOf(b[m-1][n+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[m-1][n+1])];
            let oneMove = [this.x, this.y, m-1, n+1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards down-left
        m = this.x;
        n = this.y;
        while (m<15 && n>0 && b[m+1][n-1]==" ") {
            points = 40;
            let oneMove = [this.x, this.y, m+1, n-1, points];
            possibleMoves.push(oneMove);
            m++;
            n--;
        }
        if(m<15 && n>0 && enemyPieces.indexOf(b[m+1][n-1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[m+1][n-1])];
            let oneMove = [this.x, this.y, m+1, n-1, points];
            possibleMoves.push(oneMove);
        }
        // move/eat towards down-right
        m = this.x;
        n = this.y;
        while (m<15 && n<15 && b[m+1][n+1]==" ") {
            points = 40;
            let oneMove = [this.x, this.y, m+1, n+1, points];
            possibleMoves.push(oneMove);
            m++;
            n++;
        }
        if(m<15 && n<15 && enemyPieces.indexOf(b[m+1][n+1])>-1) {
            points = enemyPoints[enemyPieces.indexOf(b[m+1][n+1])];
            let oneMove = [this.x, this.y, m+1, n+1, points];
            possibleMoves.push(oneMove);
        }
        return possibleMoves;          
    } 
}
module.exports = Bishop;