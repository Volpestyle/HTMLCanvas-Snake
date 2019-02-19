/** CONSTANTS **/
const SNAKE_COLOR = "lightcoral";

var snake = [{x: 0, y: 150}];

// Horizontal velocity
var dx = 1;
// Vertical velocity
var dy = 0;

// Get the canvas element
var gameCanvas = document.getElementById("gameCanvas");
// Return a two dimensional drawing context
var ctx = gameCanvas.getContext("2d");
//  Initialize Canvas
clearCanvas();

//Flag to start/stop;
var breakFromMain;

function main() {
    setTimeout(function onTick() {
      clearCanvas();
      advanceSnake();
      drawSnake();
      //Recurse
      if (breakFromMain) return;
      else main();
    }, 50)
  }

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnakePart(snakePart) {
    ctx.fillStyle = SNAKE_COLOR;
    ctx.fillRect(snakePart.x, snakePart.y, 5, 5);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
  }

//Stop, turn right, and turn left
function turnRight() {
    dy = ((dy >= 0 && dx >= 0) ? dx-- : dx++); //this is some tricky logic
}
function turnLeft() {
    dx = ((dy >= 0 && dx >= 0) ? dy-- : dy++);
}
function startSnake() {
    breakFromMain = 0;
    var btn = document.getElementById("startBtn");
    btn.setAttribute("onclick", "stopSnake()");
    btn.value = "Stop";
    main();
}
function stopSnake() {
    breakFromMain = 1;
    var btn = document.getElementById("startBtn");
    btn.setAttribute("onclick", "startSnake()");
    btn.value = "Start";

}


