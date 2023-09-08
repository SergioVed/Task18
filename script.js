let grid = document.querySelector(".grid");
let scoreDisplay = document.querySelector(".scoreDisplay")
let width = 10;
let intervalTime = 0;
let interval = 0;
let score = 0;
let speed = 0.8;
let body = [[1, 6], [1, 7], [1, 8], [1, 9], [2, 9]];

function createBoard(){
    for(let i = 0; i < 100; i++){
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}
createBoard()
 class Game{
    constructor(game){
        this.score = game.score;
        this.speed = game.speed;
        this.direction = game.direction;
    }
 }
class Snake{
    constructor(snake){
        this.body = snake.body;  
    }
}

const hero1 = new Game({
    score: 1,
    speed: 2,
    direction: -1
})
console.log(hero1.score)