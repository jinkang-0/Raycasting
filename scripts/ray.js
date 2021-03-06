class Ray {

  constructor(pos, angle) {
    this.pos = pos;
    this.dir = new Vector();
    this.updateDir( pos.x + Math.cos(angle) * rayLength, pos.y + Math.sin(angle) * rayLength );
  }

  updateDir(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  show() {
    c.save();
    c.translate(this.pos.x, this.pos.y);
    dot(0, 0, pointSize);
    line(0, 0, rayLength * this.dir.x, rayLength * this.dir.y, brightness);
    c.restore();
  }

  cast(wall) {

    const x1 = wall.pos1.x;
    const y1 = wall.pos1.y;
    const x2 = wall.pos2.x;
    const y2 = wall.pos2.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    // line-line intersection formula
    let denom = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);
    if (denom == 0) return;

    const t = ( (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4) ) / denom;
    const u = -( (x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3) ) / denom;

    if (t > 0 && t < 1 && u > 0) {
      let pt = new Vector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }

  }

}