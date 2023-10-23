const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

bgImage.onload = function () {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  bgImage.style.width = screenWidth + "px";
  bgImage.style.height = screenHeight + "px";
};
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
// document.body.appendChild(bgImage);