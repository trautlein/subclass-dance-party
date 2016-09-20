class SandersDancer extends Dancer {
  constructor(top, left) {
    super();
    this.$node = $('<span class="sanders dancer"></span>');
    this.setPosition(top, left);
    this.self = this;
    this.deathRotate = 'rotate(-90deg)';
  }
}

var makeSandersDancer = function (top, left) {
  return new SandersDancer(top, left);
};
