var gameState = null;
var gameRenderer = null;
var gameFPS = 1000 / 15;
var gameScore = 0;

var px = py = 10;
var gs = tc = 20;
var ax = ay = 15;
var xv = yv = 0;
var trail = [];
var tail = 5;

window.onload = function () {
    var gameCanvas = document.getElementById("snakeCanvas");
    ctx = gameCanvas.getContext("2d");
    gameRenderer = new Renderer();
    gameState = setInterval(Game, gameFPS);
};

window.onresize = function () {
    gameRenderer.setCanvasSize(window.innerWidth - 20, window.innerHeight - 20);
    gameRenderer.fillEntireCanvas('#000000');
};

