window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const centerY = height * 0.5;
  const centerX = width * 0.5;
  const xradius = 200;
  const yradius = 150;
  const xspeed = 0.05;
  const yspeed = 0.07;
  let xangle = 0;
  let yangle = 0;

  render();
  function render() {
    //context.clearRect(0, 0, width, height);
    const y = centerY + Math.sin(yangle) * yradius;
    const x = centerX + Math.cos(xangle) * xradius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();

    xangle += xspeed;
    yangle += yspeed;
    requestAnimationFrame(render);
  }
};
