Particle = function(l){
	this.location = l.get();
	this.acceleration = new Vector(0,0.05);
	this.velocity = new Vector(Math.random()*2-1,Math.random()*2-2);
	this.lifespan2 = 0;
	this.lifespan = 255;
	this.lifespan3 = 1
	this.radius = Math.random()*20
}

Particle.prototype.update = function() {
	this.velocity.add(this.acceleration);
	this.location.add(this.velocity);
	this.lifespan2 += 3;
	this.lifespan -= 2;
	this.lifespan3 -= .005
};

Particle.prototype.render = function() {
	ctx.beginPath();
	ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
	ctx.globalAlpha = this.lifespan3;
	ctx.fillStyle="rgb("+this.lifespan+","+this.lifespan2+","+ this.lifespan+")";
	ctx.fill();
	ctx.globalAlpha = 1.0
};

Particle.prototype.isDead = function() {
	if(this.lifespan < 0){
		return true;
	}else{
		return false;
	}
};