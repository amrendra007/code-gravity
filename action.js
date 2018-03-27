function random(min,max) {
	return Math.floor(Math.random()*(max -min +1) + min);
}

window.addEventListener("resize",function() {
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});


var mouse = {
	x:undefined,
	y:undefined
};

//---------start of onclick to generate the ball----------------------------


window.addEventListener("click",function(event) {
	mouse.x = event.x;
	mouse.y = event.y;

	var radius = random(8,20);
    var dx = random(-2,2);
    var dy = random(-2,2);
    circleArray.push(new Createcircle(mouse.x,mouse.y,dx,dy,radius));

	
});

//---------start of automatic ball generation----------------------------

var circleArray = [];


function init() {

	circleArray = [];

	for(var i = 0; i <50 ;i++) {

		var radius = random(8,20);
		var x = random(radius,canvas.width - radius);
		var y = random(0,canvas.height-radius);
		var dx = random(-2,2);
		var dy = random(-2,2);
		circleArray.push(new Createcircle(x,y,dx,dy,radius));
	}
}



function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	for( var j = 0; j < circleArray.length; j++) {
		circleArray[j].update()
	}
	
}

animate();
init();

