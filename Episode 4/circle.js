window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const centerY = height * 0.5;
  const centerX = width * 0.5;
  const xradius = 200;
  const yradius = 150;
  const speed = 0.05;
  let angle = 0;

  render();
  function render() {
    context.clearRect(0, 0, width, height);
    const y = centerY + Math.sin(angle) * xradius;
    const x = centerX + Math.cos(angle) * yradius;
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;
    requestAnimationFrame(render);
  }
};
