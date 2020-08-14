window.onload = function () {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    centerX = width / 2,
    centerY = height / 2,
    radius = 200,
    speed = 0.02;
  let dx,
    dy,
    arrowX,
    arrowY,
    mouseX,
    mouseY,
    angle = 0,
    angle2 = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    arrowX = centerX + Math.cos(angle2) * radius;
    arrowY = centerY + Math.sin(angle2) * radius;

    dx = mouseX - arrowX;
    dy = mouseY - arrowY;
    angle = Math.atan2(dy, dx);

    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20, 0);
    context.lineTo(10, 10);
    context.stroke();

    angle2 += speed;
    context.restore();
    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
};
