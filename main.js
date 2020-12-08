const Board = require('./core/board');
const Strategy = require('./core/strategy');
const WebSocket = require('ws');

let sendMove = (obj, vect) => {
    const msg = {
        action: "move",
        data: {
            board_id: obj.data.board_id,
            turn_token: obj.data.turn_token,
            from_row: vect[0],
            from_col: vect[1],
            to_row: vect[2],
            to_col: vect[3]
        }
    }
    service.send(JSON.stringify(msg));
}
let acceptChallenge = (obj) => {    
    const msg = {
        action: "accept_challenge",
        data: {
            board_id: obj.data.board_id            
        }
    }
    service.send(JSON.stringify(msg));
}
let keepOpen = () => {
    let timer = 0;
    let timeout = 5000;
    if(service.readyState==service.OPEN) {
        service.send("");
    }
    timer = setTimeout(keepOpen, timeout);
}

const auth_token = "531a80e2-2679-4933-a2ec-09925e984678";
const service = new WebSocket("ws://megachess.herokuapp.com/service?authtoken=" + auth_token);

service.onopen = () => {
    console.log("Connected!");       
    keepOpen();    
}
service.onclose = (e) => {
    console.log("Connection lost!");
    console.log(e);
}
service.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    console.log("Message received!: " + msg.event);

    if (msg.event == "update_user_list") {        
        console.log(msg.data.users_list);
    }    
    if (msg.event == "ask_challenge") {
        console.log("You have been challenged!");
        console.log("Playing against " + msg.data.username);
        acceptChallenge(msg);
    }
    if (msg.event == "gameover") {
        console.log("The game is over!!!!");
        let player1 = msg.data.white_username;
        let player2 = msg.data.black_username;
        let score1 = msg.data.white_score;
        let score2 = msg.data.black_score;        
        console.log(player1+": "+score1);
        console.log(player2+": "+score2);
        let endBoard = new Board(msg.data.board);
        endBoard.printBoard();                
    }
    if (msg.event == "your_turn") {
        //let actualBoard = new Board(msg.data.board);
        //actualBoard.printBoard();
        //console.log("");
        let player = new Strategy(msg.data.board, msg.data.actual_turn, 2);
        let reply = player.strategy();
        sendMove(msg, reply);
    }
    if (msg.event == "response_error") {        
        console.log(msg.data);
        console.log("Fix this pls");
    }
}

