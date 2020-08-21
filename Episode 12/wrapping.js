window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    p = new Particle(width / 2, height / 2, 3, Math.random() * Math.PI * 2);

  p.radius = 50;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

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

    if (p._position.getX() - p.radius > width) {
      p._position.setX(-p.radius);
    }
    if (p._position.getX() + p.radius < 0) {
      p._position.setX(width + p.radius);
    }
    if (p._position.getY() - p.radius > height) {
      p._position.setY(-p.radius);
    }
    if (p._position.getY() + p.radius < 0) {
      p._position.setY(height + p.radius);
    }

    requestAnimationFrame(update);
  }
};
