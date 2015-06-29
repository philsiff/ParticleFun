c = document.getElementById("myCanvas");
c.width = 640;
c.height = 480;
ctx = c.getContext("2d");

var main = function(){
	now = Date.now();
	delta = now - then;

	update(delta / 1000);
	render();

	requestAnimationFrame(main);
}


pArray = []

mouseX = 0;
mouseY = 0;

theta = 0;

c.addEventListener('mousemove', function(e){

	rect = c.getBoundingClientRect();
	mouseX = e.clientX - rect.left;
	mouseY = e.clientY - rect.top;
});

var update = function(delta){
	//pArray.push(new Particle(new Vector(mouseX, mouseY)))
	theta+=.05;
	pArray.push(new Particle(new Vector(((c.width/2)) + (200*Math.cos(theta)), (c.height/2) + (100*Math.sin(theta)))))
	pArray.forEach(function(p){
		p.update();
		if(p.isDead()){
			index = pArray.indexOf(p);
			pArray.splice(index,1)
		}
	});
}

var render = function(){
	ctx.clearRect(0,0,c.width, c.height)
	pArray.forEach(function(p){
		p.render();
	});
}

then = Date.now();
main();