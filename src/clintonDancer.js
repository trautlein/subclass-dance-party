class ClintonDancer extends Dancer {
  constructor(top, left, speed, angle, life) {
    super(top, left, 1000, speed, angle, life);
    this.$node = $('<span class="small clinton dancer"></span>');
    super.setPosition(top, left);
    this.self = this;
    this.deathRotate = 'rotate(-90deg)';
    this.step(self);
  }
  step() {
    super.step();
    var temp1 = this.speed * Math.cos(-this.angle * Math.PI / 180);
    var temp2 = -this.speed * Math.sin(-this.angle * Math.PI / 180);

    var temp1str = temp2 + parseInt(this.$node["0"].style.left) + "px";
    var temp2str = temp1 + parseInt(this.$node["0"].style.top) + "px";

    this.setPosition(temp2str, temp1str);
    this.life = this.life - 1;
    if (this.life === 0) {
      this.die();
      delete this;
    }
  }
}

var makeClintonDancer = function (top, left) {
  return new ClintonDancer(top, left, 100, 2, -90);
};
