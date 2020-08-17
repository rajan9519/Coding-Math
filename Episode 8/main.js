window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const particles = [];
  const numparticles = 100;

  for (let i = 0; i < numparticles; i++) {
    particles.push(
      new Particle(
        width / 2,
        height / 2,
        Math.random() * 4 + 1,
        Math.random() * Math.PI * 2
      )
    );
  }

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < numparticles; i++) {
      const p = particles[i];
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
    }

    requestAnimationFrame(update);
  }
};
