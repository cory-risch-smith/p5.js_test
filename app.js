var x = 0;
var y = 0;

function setup() {
  var myCanvas = createCanvas(1366, 768);

  myCanvas.parent('mySketch');
}

function draw() {
  ellipse(mouseX, mouseY, x, y);
  if (mouseIsPressed == true) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    x += 0.025;
    y += 0.025;
  } else {
    fill(0);
  }
}
