class TrumpDancer extends Dancer {
  constructor(top, left) {
    super();
    this.$node = $('<span class="trump dancer"></span>');
    this.setPosition(top, left);
    this.uniqueId = Math.floor(Math.random() * 1000);
    this.self = this;
    this.deathRotate = 'rotate(90deg)';
  }
}

var makeTrumpDancer = function (top, left) {
  return new TrumpDancer(top, left);
};
