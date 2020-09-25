class Particle {

  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.rays = [];
    
    for (var a = 0; a < 360; a++) {
      this.rays.push( new Ray(this.pos, radian(a)) );
    }
  }

  look(walls) {

    for (let ray of this.rays) {
      
      // find line to closest wall
      let closest;
      let record = Infinity;

      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }

      // draw if line exists
      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y, brightness);
      }

    }

  }

  updatePos(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  show() {
    dot(this.pos.x, this.pos.y, particleSize);
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].show();
    }
  }

}