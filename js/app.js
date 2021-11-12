// referencias a los objetos del DOM que necesito manipular
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let radio = document.querySelector("#radio");
let colorBorder = document.querySelector("#colorBorder");
let colorFill = document.querySelector("#colorFill");

function dibujar(radio, colorBorder, colorFill) {
  // Limpio el canvas y dibujo un circulo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = colorBorder;
  ctx.lineWidth = 10;
  ctx.fillStyle = colorFill;
  ctx.beginPath();
  ctx.arc(225, 225, radio, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

dibujar(radio.value, colorBorder.value, colorFill.value);

radio.addEventListener("input", (event) => {
  dibujar(event.target.value, colorBorder.value, colorFill.value);
});

colorBorder.addEventListener("input", (event) => {  
  dibujar(radio.value, event.target.value, colorFill.value);
});

colorFill.addEventListener("input", (event) => {  
  dibujar(radio.value, colorBorder.value, event.target.value);
});
