function Vector(x = 1, y = 0) {
  this._x = x;
  this._y = y;
}
Vector.prototype.setX = function (value) {
  this._x = value;
};
Vector.prototype.getX = function () {
  return this._x;
};
Vector.prototype.setY = function (value) {
  this._y = value;
};
Vector.prototype.getY = function () {
  return this._y;
};
Vector.prototype.setAngle = function (angle) {
  const length = this.getLength();
  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};
Vector.prototype.getAngle = function () {
  return Math.atan2(this._y, this._x);
};
Vector.prototype.setLength = function (length) {
  const angle = this.getAngle();
  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};
Vector.prototype.getLength = function () {
  return Math.sqrt(this._x * this._x + this._y * this._y);
};
Vector.prototype.add = function (other) {
  return new Vector(this._x + other.getX(), this._y + other.getY());
};
Vector.prototype.subtract = function (other) {
  return new Vector(this._x - other.getX(), this._y - other.getY());
};
Vector.prototype.multiply = function (val) {
  return new Vector(this._x * val, this._y * val);
};
Vector.prototype.devide = function (val) {
  return new Vector(this._x / val, this._y / val);
};
Vector.prototype.addTo = function (other) {
  this._x += other.getX();
  this._y += other.getY();
};
Vector.prototype.subtractFrom = function (other) {
  this._x -= other.getX();
  this._y -= other.getY();
};
Vector.prototype.multiplyBy = function (val) {
  this._x *= val;
  this._y *= val;
};
Vector.prototype.divideBy = function (val) {
  this._x /= val;
  this._y /= val;
};
