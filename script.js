let grid = document.querySelector(".grid");
let scoreDisplay = document.querySelector(".scoreDisplay")
let width = 10;
let curentSnake = [2, 1, 0];
let intervalTime = 0;
let interval = 0;

function createBoard(){
    for(let i = 0; i < 100; i++){
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}
createBoard()