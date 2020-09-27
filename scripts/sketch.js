// declare variables
let pointSize = 4;
let rayLength = 10;
let particleSize = 5;
let brightness = 0.1;

// setup canvas
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  setup();
});

window.addEventListener('mousemove', (event) => {
  particle.updatePos(event.clientX, event.clientY);
});

// setup scene
var walls = [];

for (var i = 0; i < 6; i++) {
  const x1 = random(canvas.width);
  const y1 = random(canvas.height);
  const x2 = random(canvas.width);
  const y2 = random(canvas.height);
  walls.push( new Boundary(x1, y1, x2, y2) );
}

walls.push( new Boundary(-2, -2, canvas.width+2, -2) );
walls.push( new Boundary(-2, -2, -2, canvas.height+2) );
walls.push( new Boundary(canvas.width+2, -2, canvas.width+2, canvas.height+2) );
walls.push( new Boundary(-2, canvas.height+2, canvas.width+2, canvas.height+2) );

var particle = new Particle(200, 200);

// setup drawing
function setup() {
  c.fillStyle = "white";
  c.strokeStyle = "white";
}

setup();

// animation loop
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  particle.show();

  for (var i = 0; i < walls.length; i++) {
    walls[i].show();
  }

  particle.look(walls);

  requestAnimationFrame(draw);
}

draw();