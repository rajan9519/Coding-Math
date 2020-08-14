window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const centerY = height * 0.5;
  const centerX = width * 0.5;
  const offset = height * 0.4;
  const speed = 0.1;
  let angle = 0;
  let alpha = 0;
  let radius = 0;

  render();
  function render() {
    const y = centerY + Math.sin(angle) * offset;

    context.clearRect(0, 0, width, height);
    console.log(height, width);
    // context.beginPath();
    context.arc(centerX, y, 50, 0, Math.PI * 2, false);
    context.fill();

    // context.arc(centerX + 200, centerY, radius, 0, Math.PI * 2, false);
    // context.fill();

    // context.fillStyle = "rgba(0,0,0," + alpha + ")";
    // context.arc(centerX - 200, centerY, 50, 0, Math.PI * 2, false);
    // context.fill();

    radius = Math.abs(Math.sin(angle)) * 50;
    alpha = Math.abs(Math.sin(angle));
    angle += speed;
    requestAnimationFrame(render);
  }
};
