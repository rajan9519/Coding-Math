function Particle(x, y, speed, direction) {
  this._position = new Vector(x, y);
  this._velocity = new Vector();
  this._velocity.setLength(speed);
  this._velocity.setAngle(direction);
}

Particle.prototype.update = function () {
  this._position.addTo(this._velocity);
};
Particle.prototype.accelerate = function (accel) {
  this._velocity.addTo(accel);
};
