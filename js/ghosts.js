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
