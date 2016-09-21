class ClintonDancer extends Dancer {
  constructor(top, left, speed, angle, life, size) {
    super(top, left, 100, speed, angle, life);
    // TODO: I've added the class small whether they are a particle (correct) or
    // a basic clintonDancer (incorrect), we should create a new class 'ParticleClinton'
    // which extends this
    if (size === true) {
      this.$node = $('<span class="small clinton dancer"></span>');
    } else {
      this.$node = $('<span class="clinton dancer"></span>');
    }
    super.setPosition(top, left);
    this.self = this;
    this.deathRotate = 'rotate(-90deg)';
    this.step(self);
  }
  step() {
    if (this.life >= 0) {
      var temp1 = this.speed * Math.cos(-this.angle * Math.PI / 180);
      var temp2 = -this.speed * Math.sin(-this.angle * Math.PI / 180);

      var temp1str = temp2 + parseInt(this.$node["0"].style.left) + "px";
      var temp2str = temp1 + parseInt(this.$node["0"].style.top) + "px";

      this.setPosition(temp2str, temp1str);
      this.life = this.life - 1;
      if (this.life === 0) {
        this.die();
        var context = this;
        setTimeout(function() { context.$node.remove(); }, 2000);
        //clearTimeout(this.timer);
        delete this;

      }
      super.step();
    }
  }
}

var makeClintonDancer = function (top, left) {
  return new ClintonDancer(top, left, 100, 2, -90);
};
