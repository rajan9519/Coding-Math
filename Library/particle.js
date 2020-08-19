function Particle(x, y, speed = 0, direction = 0, grav = 0) {
  this._position = new Vector(x, y);
  this._velocity = new Vector();
  this._velocity.setLength(speed);
  this._velocity.setAngle(direction);
  this._gravity = new Vector(0, grav);
}

Particle.prototype.update = function () {
  this._velocity.addTo(this._gravity);
  this._position.addTo(this._velocity);
};
Particle.prototype.accelerate = function (accel) {
  this._velocity.addTo(accel);
};
