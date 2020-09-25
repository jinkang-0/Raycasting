class Boundary {

  constructor(x1, y1, x2, y2) {
    this.pos1 = new Vector(x1, y1);
    this.pos2 = new Vector(x2, y2);
  }

  show() {
    // this.pos1.show();
    // this.pos2.show();
    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, 1);
  }

}