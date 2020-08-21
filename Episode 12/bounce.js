window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    p = new Particle(
      width / 2,
      height / 2,
      Math.random() * 5 + 4,
      Math.random() * Math.PI,
      0.1
    );

  p.radius = 20;
  p.bounce = -0.9;

  update();

  function update() {
    //context.clearRect(0, 0, width, height);

    p.update();

    context.beginPath();
    context.arc(
      p._position.getX(),
      p._position.getY(),
      p.radius,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    if (p._position.getX() + p.radius > width) {
      p._position.setX(width - p.radius);
      p._velocity.setX(p._velocity.getX() * p.bounce);
    }
    if (p._position.getX() - p.radius < 0) {
      p._position.setX(p.radius);
      p._velocity.setX(p._velocity.getX() * p.bounce);
    }
    if (p._position.getY() + p.radius > height) {
      p._position.setY(height - p.radius);
      p._velocity.setY(p._velocity.getY() * p.bounce);
    }
    if (p._position.getY() - p.radius < 0) {
      p._position.setY(p.radius);
      p._velocity.setY(p._velocity.getY() * p.bounce);
    }

    requestAnimationFrame(update);
  }
};
