window.onload = function () {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);
  let ship = new Particle(width / 2, height / 2);
  let thrust = new Vector(0, 0);

  function wrap(value, min, max) {
    return value > max ? min : value < min ? max : value;
  }

  document.body.addEventListener("keydown", (event) => {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 38: // up
        thrust.setY(-0.1);
        break;
      case 40: // down
        thrust.setY(0.1);
        break;
      case 37: // left
        thrust.setX(-0.1);
        break;
      case 39: // right
        thrust.setX(0.1);
      default:
        break;
    }
  });

  document.body.addEventListener("keyup", (event) => {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 38: // up
        thrust.setY(0);
        break;
      case 40: // down
        thrust.setY(0);
        break;
      case 37: // left
        thrust.setX(0);
        break;
      case 39: // right
        thrust.setX(0);
      default:
        break;
    }
  });

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    // animation goes here
    ship.accelerate(thrust);
    ship.update();
    ship._position.setX(wrap(ship._position.getX(), 0, width));
    ship._position.setY(wrap(ship._position.getY(), 0, height));
    context.beginPath();
    context.arc(
      ship._position.getX(),
      ship._position.getY(),
      10,
      0,
      Math.PI * 2,
      false
    );
    context.fill();
    requestAnimationFrame(update);
  }
};
