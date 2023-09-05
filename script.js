let grid = document.querySelector(".grid");
let scoreDisplay = document.querySelector(".scoreDisplay")
let width = 10;
let intervalTime = 0;
let interval = 0;
let score = 0;
let speed = 0.8;

function createBoard(){
    for(let i = 0; i < 100; i++){
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}
createBoard()
 class Game{
    constructor(){
        this.score = score;
        this.speed = speed;
        this.firection = direction;
    }
 }
console.log(score, speed)
class Snake{
    constructor(){
        this.body = [[1, 6], [1, 7], [1, 8], [1, 9], [2, 9]];
    }
}