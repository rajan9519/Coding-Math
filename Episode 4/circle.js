window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const centerY = height * 0.5;
  const centerX = width * 0.5;
  const radius = 200;
  const speed = 0.01;
  let angle = 0;

  render();
  function render() {
    context.clearRect(0, 0, width, height);
    const y = centerY + Math.sin(angle) * radius;
    const x = centerX + Math.cos(angle) * radius;
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;
    requestAnimationFrame(render);
  }
};
