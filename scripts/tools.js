function dot(x, y, r, color) {
  c.beginPath();
  c.arc(x, y, r, 0, 360);
  c.closePath();
  if (color) c.fillStyle = color;
  c.fill();
}

function line(x1, y1, x2, y2, alpha) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.closePath();
  c.lineWidth = 2;
  c.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
  c.stroke();
}

function radian(a) {
  return a * Math.PI / 180;
}

function random(min, max) {
  if (max) {
    return (Math.random() * (max - min)) + min;
  } else if (min) {
    return Math.random() * min;
  } else {
    return Math.random();
  }
}

function dist(pos1, pos2) {
  return Math.sqrt( Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2) );
}