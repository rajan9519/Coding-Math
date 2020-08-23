window.onload = function () {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    p = new Particle(
      width / 2,
      height / 2,
      10,
      Math.PI * 2 * Math.random(),
      0,
      1,
      0.97
    );

  p._radius = 10;

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    p.update();
    // console.log(p._velocity);

    context.beginPath();
    context.arc(
      p._position.getX(),
      p._position.getY(),
      p._radius,
      0,
      2 * Math.PI,
      false
    );
    context.fill();

    requestAnimationFrame(update);
  }
};
