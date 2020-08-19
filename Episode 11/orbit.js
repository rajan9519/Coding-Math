window.onload = function () {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    sun = new Particle(width / 2, height / 2, 0, 0),
    planet = new Particle(width / 2 + 200, height / 2, 10, -Math.PI / 2);

  sun._mass = 50000;

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    // animation goes here

    planet.gravitateTo(sun);
    planet.update();
    //console.log(planet._position);
    context.beginPath();
    context.fillStyle = "#fff000";
    context.arc(
      sun._position.getX(),
      sun._position.getY(),
      20,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = "#000fff";
    context.arc(
      planet._position.getX(),
      planet._position.getY(),
      5,
      0,
      Math.PI * 2,
      false
    );
    context.fill();

    requestAnimationFrame(update);
  }
};
