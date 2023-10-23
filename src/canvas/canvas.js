const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const destroyBtn = document.getElementById("destroy-btn")
const eraseBtn = document.getElementById("erase-btn");
const undoBtn = document.getElementById("undo-btn");
const file = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");
const fontSizeRange = document.getElementById("font-size");
const strokeStyle = document.querySelector(".font-btn-wrapper .font-style:nth-child(1)");
const fillStyle = document.querySelector(".font-btn-wrapper .font-style:nth-child(2)");
const fontFamilyOptions = Array.from(document.getElementsByClassName("font-family"));
const modeBtnOptions = Array.from(document.getElementsByClassName("mode-btn"))

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round" 
let colorValue = color.value;
let isPainting = false;
let isFilling = false;
let fontSize = 68;
let isFillStyle = false;
let fontFamily = "sans";
let mode = 'Draw';

class Stack {
  constructor() {
    this.arr = [];
    this.index = -1;
  }
  push(item) {
    this.index++;
    this.arr[this.index] = item;
  }
  pop() {
    if (this.index < 0) return null;
    this.index--;
    const result = this.arr[this.index];
    return result;
  }
}
let undoList = new Stack();

undoBtn.addEventListener("click", () => {
  let image = new Image();
  let imagePath = undoList.pop();
  if (imagePath) {
    image.src = imagePath;
    image.onload = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };
  } else {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = colorValue;
  }
})
function onMove(event) { //mousemove
  if(isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
canvas.addEventListener("mousedown", () => {
  if (mode === 'Draw') {
    isPainting = true;
  }
})
canvas.addEventListener("mouseup", () => {
  ctx.beginPath();
  isPainting = false;
  if (mode === 'Draw') {
    undoList.push(canvas.toDataURL());
  }
})
canvas.addEventListener("mouseleave", () => {
  ctx.beginPath();
  isPainting = false;
})
lineWidth.addEventListener("change", (event) => {
  ctx.lineWidth = event.target.value
})
color.addEventListener("change", (event) => {
  ctx.strokeStyle = event.target.value; // 선택한 색으로 선을 그릴 수 있음.
  ctx.fillStyle = event.target.value;
})
colorOptions.forEach((colo) => colo.addEventListener("click", (event) => {
  colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}));
fontFamilyOptions.forEach((family) => family.addEventListener("click", (event) => {
  fontFamilyOptions.forEach((element) => {
    element.style.backgroundColor = "#3498db";
  });
  fontFamily = event.target.innerHTML;
  family.style.backgroundColor = "blue"
}));
modeBtnOptions.forEach((mod) => mod.addEventListener("click", (event) => {
  modeBtnOptions.forEach((element) => {
    element.style.backgroundColor = '#3498db';
  });
  mode = event.target.innerHTML;
  mod.style.backgroundColor = "blue";
}));
colorOptions.forEach((colo) => colo.addEventListener("mouseenter", () => {
  color.classList.add("animate");
}))
colorOptions.forEach((colo) => colo.addEventListener("mouseleave", () => {
  color.classList.remove("animate");
}))
canvas.addEventListener("click", (event) => {
  if(mode === 'Fill') {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  } else if (mode === 'Text') {
    const text = textInput.value;
    if (text !== "") {
      ctx.save(); // save current state
      ctx.lineWidth = 1;
      ctx.font = `${fontSize}px ${fontFamily}`
      if (isFillStyle) {
        ctx.fillText(text, event.offsetX, event.offsetY)
      } else ctx.strokeText(text, event.offsetX, event.offsetY)
      // ctx.lineWidth = lineWidth.value
      ctx.restore();
    }
  }
  if (mode !== 'Draw') {
    undoList.push(canvas.toDataURL());
  }
})
destroyBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete it?")) {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = colorValue;
  }
})
eraseBtn.addEventListener("click", () => {
  ctx.strokeStyle = "white";
  isFilling = false;
})
file.addEventListener("change", (event) => {
  isFilling = false;
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)
  const image = new Image();
  // const image =  document.createElement("img") // 같은 기능
  image.src = url;
  //addEventListener과 같은 기능 function is onload, 특정함수 안에서 사용가능. 그냥은 안됨
  image.onload = function() { 
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // image.value = null;
  }
  undoList.push(canvas.toDataURL());
})
fontSizeRange.addEventListener("change", (event) => {
  fontSize = event.target.value;
})
strokeStyle.addEventListener("click", () => {
  isFillStyle = false;
  strokeStyle.style.backgroundColor = "blue";
  fillStyle.style.backgroundColor = "#3498db"
})
fillStyle.addEventListener("click", () => {
  isFillStyle = true;
  fillStyle.style.backgroundColor = "blue";
  strokeStyle.style.backgroundColor = "#3498db"
})
function onSaveClick() {
  if(confirm('Do you want to save it?')) {
    const url = canvas.toDataURL();
    const a = document.createElement("a")
    a.href = url
    a.download = "myDrawing.png"
    a.click();
  }
}
canvas.addEventListener("mousemove", onMove);
saveBtn.addEventListener("click", onSaveClick);