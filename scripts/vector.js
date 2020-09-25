class Vector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    dot(this.x, this.y, pointSize);
  }

  normalize() {
    const mag = Math.sqrt( this.x*this.x + this.y*this.y );

    this.x /= mag;
    this.y /= mag;
  }

}