function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(3);

  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY < height / 2) {
      fill(0, 0, 255);
    } else {
      fill(255);
    }
  }
  circle(width / 2, height / 2, height / 4);
}
