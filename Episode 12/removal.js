window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const particles = [];
  const numparticles = 100;

  for (let i = 0; i < numparticles; i++) {
    const p = new Particle(
      width / 2,
      height / 2,
      Math.random() * 4 + 1,
      Math.random() * Math.PI * 2
    );
    p.radius = 10;

    particles.push(p);
  }

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    console.log(particles.length);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
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
    }

    removeDeadParticles();
    requestAnimationFrame(update);
  }
  function removeDeadParticles() {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];

      if (
        p._position.getX() - p.radius > width ||
        p._position.getX() + p.radius < 0 ||
        p._position.getY() - p.radius > height ||
        p._position.getY() + p.radius < 0
      ) {
        particles.splice(i, 1);
      }
    }
  }
};
