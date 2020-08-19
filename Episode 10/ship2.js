window.onload = function () {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    ship = new Particle(width / 2, height / 2),
    thrust = new Vector(0, 0);

  let thrusting = false,
    angle = 0,
    turnLeft = false,
    turnRight = false;

  function wrap(value, min, max) {
    return value > max ? min : value < min ? max : value;
  }

  document.body.addEventListener("keydown", (event) => {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 38: // up
        thrusting = true;
        break;
      case 37: // left
        turnLeft = true;
        break;
      case 39: // right
        turnRight = true;
      default:
        break;
    }
  });

  document.body.addEventListener("keyup", (event) => {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 38: // up
        thrusting = false;
        break;
      case 37: // left
        turnLeft = false;
        break;
      case 39: // right
        turnRight = false;
      default:
        break;
    }
  });

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    if (turnLeft) {
      angle -= 0.08;
    }
    if (turnRight) {
      angle += 0.08;
    }
    if (thrusting) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(0);
    }

    thrust.setAngle(angle);
    ship.accelerate(thrust);
    ship.update();
    ship._position.setX(wrap(ship._position.getX(), 0, width));
    ship._position.setY(wrap(ship._position.getY(), 0, height));

    context.save();
    context.translate(ship._position.getX(), ship._position.getY());
    context.rotate(angle);

    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10, -7);
    context.lineTo(-10, 7);
    context.lineTo(10, 0);
    if (thrusting) {
      context.moveTo(-10, 0);
      context.lineTo(-18, 0);
    }
    context.stroke();

    context.restore();
    requestAnimationFrame(update);
  }
};
