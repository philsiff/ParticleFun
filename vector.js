Vector = function(x, y){
	this.x = x;
	this.y = y;
};

Vector.prototype.add = function(v){
	this.x += v.x;
	this.y += v.y;
};

Vector.prototype.sub = function(v) {
	this.x -= v.x;
	this.y -= v.y;
};

Vector.prototype.mult = function(s) {
	this.x *= s;
	this.y *= s;
};

Vector.prototype.div = function(s) {
	this.x /= s;
	this.y /= s;
};

Vector.prototype.mag = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
};

Vector.prototype.setMag = function(m){
	s = m / this.mag();
	this.x /= s;
	this.y /= s;
}

Vector.prototype.normalize = function(){
	this.x = this.x / this.mag();
	this.y = this.y / this.mag();
}

Vector.prototype.heading = function() {
	return Math.atan2(this.y, this.x);
};

Vector.prototype.rotate = function(a) {
	this.x = this.mag() * Math.cos(this.heading() + a);
	this.y = this.mag() * Math.sin(this.heading() + a);
};

Vector.prototype.dot = function(v) {
	return this.x * v.x + this.y * v.y;
};

Vector.prototype.limit = function(max) {
	if(this.mag() > max){
		this.setMag(max);
	}
};

Vector.prototype.get = function() {
	return new Vector(this.x, this.y);
};

Vector.random2D = function(){
	randA = (Math.random() * (2 * Math.PI));
	randX = Math.cos(randA);
	randY = Math.sin(randA)
	return new Vector(randX, randY);
}