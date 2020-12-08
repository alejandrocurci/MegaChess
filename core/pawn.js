class Pawn {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;        
    }
    getMoves(b) {
        let possibleMoves = [];
        let blackPieces = ["p","r","h","b","q","k"];
        let whitePieces = ["P","R","H","B","Q","K"];
        let enemyPieces = [100, 600, 300, 400, 50, 1000];
        let points;
        if(this.color == "white") {
            // move upwards
            switch(this.x) {
                case 13:
                    points = this.randomInteger(110, 119);
                    break;
                case 12:
                    points = this.randomInteger(120, 129);
                    break;
                case 11:
                    points = 150;
                    break;
                case 10:
                    points = 200;
                    break;
                case 9:
                    points = 500;
                    break;
            }
            if(this.x==12 || this.x==13) {
                if(b[this.x-2][this.y]==" " && b[this.x-1][this.y]==" ") {                            
                    let oneMove = [this.x, this.y, this.x-2, this.y, points]; 
                    possibleMoves.push(oneMove);
                }
            } else {
                if(b[this.x-1][this.y]==" ") {                            
                    let oneMove = [this.x, this.y, this.x-1, this.y, points];                    
                    possibleMoves.push(oneMove);
                }
            }
            // eat upwards            
            if(blackPieces.indexOf(b[this.x-1][this.y-1])>-1 && this.y>0) { 
                points = enemyPieces[blackPieces.indexOf(b[this.x-1][this.y-1])];                           
                let oneMove = [this.x, this.y, this.x-1, this.y-1, points];
                possibleMoves.push(oneMove);
            }
            if(blackPieces.indexOf(b[this.x-1][this.y+1])>-1 && this.y<15) { 
                points = enemyPieces[blackPieces.indexOf(b[this.x-1][this.y+1])];                           
                let oneMove = [this.x, this.y, this.x-1, this.y+1, points];
                possibleMoves.push(oneMove);
            }
            return possibleMoves;
        } else {
            switch(this.x) {
                case 2:
                    points = this.randomInteger(110, 119);
                    break;
                case 3:
                    points = this.randomInteger(120, 129);
                    break;
                case 4:
                    points = 150;
                    break;
                case 5:
                    points = 200;
                    break;
                case 6:
                    points = 500;
                    break;
            }
            // move downwards
            if(this.x==2 || this.x==3) {
                if(b[this.x+2][this.y]==" " && b[this.x+1][this.y]==" ") {                            
                    let oneMove = [this.x, this.y, this.x+2, this.y, points];                    
                    possibleMoves.push(oneMove);
                }
            } else {
                if(b[this.x+1][this.y]==" ") {                            
                    let oneMove = [this.x, this.y, this.x+1, this.y, points];                    
                    possibleMoves.push(oneMove);
                }
            }
            // eat downwards            
            if(whitePieces.indexOf(b[this.x+1][this.y-1])>-1 && this.y>0) {
                points = enemyPieces[whitePieces.indexOf(b[this.x+1][this.y-1])];                            
                let oneMove = [this.x, this.y, this.x+1, this.y-1, points];
                possibleMoves.push(oneMove);
            }
            if(whitePieces.indexOf(b[this.x+1][this.y+1])>-1 && this.y<15) { 
                points = enemyPieces[whitePieces.indexOf(b[this.x+1][this.y+1])];                            
                let oneMove = [this.x, this.y, this.x+1, this.y+1, points];
                possibleMoves.push(oneMove);
            }
            return possibleMoves;
        }      
    }
    randomInteger(min, max) {
        return Math.floor(Math.random()* (max-min+1))+min;
    }       
}
module.exports = Pawn;