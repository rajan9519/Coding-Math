window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const centerY = height * 0.5;
  const centerX = width * 0.5;
  const radius = 200;
  const number = 20;

  let angle = 0;
  const slice = (2 * Math.PI) / number;

  for (let i = 0; i < number; i++) {
    const y = centerY + Math.sin(angle) * radius;
    const x = centerX + Math.cos(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();

    angle += slice;
  }
};
