var canvas = $('canvas')[0];
var context = canvas.getContext('2d');

var paddleX = 200;
var paddleY = 460;

var paddleWidth = 100;
var paddleHeight = 15;

var paddleDeltaX = 0; 
var paddleDeltaY = 0; 

function drawPaddle(){
  context.fillRect(paddleX,paddleY,paddleWidth,paddleHeight);
}

var ballX = 300;
var ballY = 300;
var ballRadius = 10;

function drawBall(){
	context.beginPath();

	context.arc(ballX,ballY,ballRadius,0,Math.PI*2,true);

	context.fill();
}

