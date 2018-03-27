var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var friction = 0.7;
var gravity = 1;


var colorArray = [
    "#7ECEFD",
    "#FFF6E5",
    "#FF7F66",
    "#024959",
    "#FFFFFA",
    "#F24C27",
    "#5F5448"
];

function Createcircle(x,y,dx,dy,radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor((Math.random()*colorArray.length) )];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,2*Math.PI);
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
		c.closePath();

	};

	this.update = function() {

        if(this.y + this.radius + this.dy > canvas.height ) {
			this.dy = -this.dy*friction;

		} else {
			this.dy += gravity ;

		}

		if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0 ) {
			this.dx = -this.dx;

		}

		this.y += this.dy;
		this.x += this.dx;
		
		this.draw();
	}
}

