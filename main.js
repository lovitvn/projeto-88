
// Crie uma variável canvas
var canvas = new fabric.canvas("mycanvas")
//Defina as posições iniciais da bola e do buraco.
ball_y=0;
ball_x=0
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
fabric.Image.fromuURL("golf-h.png", function(Img) {
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
top:hole y,
lefti:hole x
});
canvas .add(hole_obj);
});
new image();
}
function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball obj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);}
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
document.getElementById("myCanvas").style.borderColor="red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		if(ball_y <=450)
	ball_y = ball_y + block_image_height;
	canvas.remove(ball_obj);
	new image();
	}
	}
	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

