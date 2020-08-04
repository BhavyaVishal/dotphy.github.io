let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight * (3 / 5);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  let velocity = createSlider(0, 200, 10);
  velocity.position(canvasWidth / 2, canvasHeight - 100);
  velocity.style("width", "100px");
}
function draw() {
  background(0);
}
