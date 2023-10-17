// ctx.rect(50, 50, 100, 100);
// ctx.moveTo(50, 50); // 가로 x, 세로 y
// ctx.lineTo(150, 50); // X: 50 ~ 150, Y: 50
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke(); 
// ctx.fill();
///////////////////////////////////////////////////////////////////////////////////////////////////

// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   ]

// ctx.lineWidth = 2;
// let offsetX = 0;
// let offsetY = 0;

// function onMouse(event) {
//   ctx.beginPath();
//   ctx.moveTo(offsetX, offsetY);
//   const color = colors[Math.floor(Math.random() * colors.length)]
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// function onClick(e) {
//   ctx.beginPath();
//   ctx.fillStyle = "white"
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//   ctx.beginPath();
//   offsetX = e.offsetX;
//   offsetY = e.offsetY
// }

// canvas.addEventListener("click", onClick);
// canvas.addEventListener("mousemove", onMouse);