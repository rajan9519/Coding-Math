window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  const p = new Particle(100, height, 10, -Math.PI / 2);
  const accel = new Vector(0.1, 0.1);

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    p.accelerate(accel);
    p.update();
    context.beginPath();
    context.arc(
      p._position.getX(),
      p._position.getY(),
      10,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    requestAnimationFrame(update);
  }
};
