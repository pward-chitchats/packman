// background.js

let radialGradient;

function setup() {
  createCanvas(500, 500);
  radialGradient = createGraphics(500, 500);
  drawRadialGradient();
}

function draw() {
  background(radialGradient);
}

function drawRadialGradient() {
  const centerX = radialGradient.width / 2;
  const centerY = radialGradient.height / 2;
  const maxRadius = dist(0, 0, centerX, centerY);

  radialGradient.noStroke();

  for (let r = maxRadius; r > 0; r -= 1) {
    const alpha = map(r, 0, maxRadius, 0, 255);
    const color = lerpColor(color(0, 0, 0, alpha), color(255, 255, 255, alpha), r / maxRadius);
    radialGradient.fill(color);
    radialGradient.ellipse(centerX, centerY, r * 2, r * 2);
  }
}
