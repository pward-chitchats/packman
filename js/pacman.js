// Set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

// Define Pac-Man's starting position, speed, and direction
let pacManX = -20;
let pacManY = canvas.height / 2;
let pacManSpeed = 2;
let pacManDirection = 1;
let pacManMouthAngle = 0;

// Define the ghosts' starting positions, speed, and directions
let blueGhostX = canvas.width;
let blueGhostY = canvas.height / 2;
let blueGhostSpeed = 1.5;
let blueGhostDirection = -1;

let greenGhostX = canvas.width;
let greenGhostY = canvas.height / 2;
let greenGhostSpeed = 2.0;
let greenGhostDirection = -1;

let redGhostX = canvas.width;
let redGhostY = canvas.height / 2;
let redGhostSpeed = 2.5;
let redGhostDirection = -1;

// Update the positions of the ghosts based on their current positions and the position of Pac-Man
function updateGhosts() {
  if (blueGhostX < pacManX) {
    blueGhostDirection = 1;
  } else {
    blueGhostDirection = -1;
  }
  blueGhostX += blueGhostSpeed * blueGhostDirection;

  if (greenGhostX < pacManX) {
    greenGhostDirection = 1;
  } else {
    greenGhostDirection = -1;
  }
  greenGhostX += greenGhostSpeed * greenGhostDirection;

  if (redGhostX < pacManX) {
    redGhostDirection = 1;
  } else {
    redGhostDirection = -1;
  }
  redGhostX += redGhostSpeed * redGhostDirection;
}

// Define the game loop
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the Pac-Man mouth angle based on the sinusoidal oscillation
  pacManMouthAngle = Math.sin(Date.now() / 100) * Math.PI / 4;

  // Move Pac-Man
  pacManX += pacManSpeed * pacManDirection;

  // Update the ghosts
  updateGhosts();

  // Draw Pac-Man
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(pacManX, pacManY, 20, pacManMouthAngle * pacManDirection, Math.PI * 2 - pacManMouthAngle * pacManDirection, false);
  ctx.lineTo(pacManX, pacManY);
  ctx.fill();

  // Draw Pac-Man's eye
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(pacManX + 10 * pacManDirection, pacManY - 10, 4, 0, Math.PI * 2, false);
  ctx.fill();


    // Reverse Pac-Man's direction when he reaches the right edge of the canvas
  // Reverse Pac-Man's direction when he reaches the right edge of the canvas
  if (pacManX > canvas.width + 20) {
    pacManDirection = -1;
    pacManX = -20;
  }

  // Draw the ghosts
  function drawGhost(x, y, color) {
    // Draw the ghost's body
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 20, Math.PI, 0, false);
    ctx.lineTo(x - 20, y);
    for (let i = 0; i < 4; i++) {
      ctx.quadraticCurveTo(x - 20 + (10 * i), y + ((i % 2 === 0) ? 20 : 0), x - 10 + (10 * i), y);
    }
    ctx.closePath();
    ctx.fill();

    // Draw the ghost's eyes
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x - 8, y - 6, 4, 0, Math.PI * 2, false);
    ctx.arc(x + 8, y - 6, 4, 0, Math.PI * 2, false);
    ctx.fill();

    // Draw the ghost's pupils
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x - 6, y - 6, 2, 0, Math.PI * 2, false);
    ctx.arc(x + 10, y - 6, 2, 0, Math.PI * 2, false);
    ctx.fill();
  }

  // Draw the ghosts
  drawGhost(blueGhostX, blueGhostY, 'blue');
  drawGhost(greenGhostX, greenGhostY, 'green');
  drawGhost(redGhostX, redGhostY, 'red');

}

let animationInterval;

// Function to start the game loop
function startAnimation() {
  clearInterval(animationInterval); // Clear previous interval
  pacManX = -20; // Reset Pac-Man's position
  pacManDirection = 1; // Reset Pac-Man's direction
  animationInterval = setInterval(draw, 30);
}

// Add a click event listener to the button
const startButton = document.getElementById('startAnimation');
startButton.addEventListener('click', startAnimation);

