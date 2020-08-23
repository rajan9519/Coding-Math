function Particle(
  x,
  y,
  speed = 0,
  direction = 0,
  grav = 0,
  mass = 1,
  friction = 1
) {
  this._position = new Vector(x, y);
  this._velocity = new Vector();
  this._velocity.setLength(speed);
  this._velocity.setAngle(direction);
  this._gravity = new Vector(0, grav);
  this._mass = mass;
  this._friction = friction;
}

Particle.prototype.update = function () {
  this._velocity.multiplyBy(this._friction);
  this._velocity.addTo(this._gravity);
  this._position.addTo(this._velocity);
};

Particle.prototype.accelerate = function (accel) {
  this._velocity.addTo(accel);
};

Particle.prototype.angleTo = function (other) {
  return Math.atan2(
    other._position.getY() - this._position.getY(),
    other._position.getX() - this._position.getX()
  );
};

Particle.prototype.distanceTo = function (other) {
  const dx = other._position.getX() - this._position.getX(),
    dy = other._position.getY() - this._position.getY();

  return Math.sqrt(dx * dx + dy * dy);
};

Particle.prototype.gravitateTo = function (other) {
  const grav = new Vector(),
    dist = this.distanceTo(other);

  grav.setLength(other._mass / (dist * dist));
  grav.setAngle(this.angleTo(other));
  this._velocity.addTo(grav);
};
