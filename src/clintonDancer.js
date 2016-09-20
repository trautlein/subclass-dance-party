class ClintonDancer extends Dancer {
  constructor(top, left) {
    super();
    this.$node = $('<span class="clinton dancer"></span>');
    this.setPosition(top, left);
    this.self = this;
    this.deathRotate = 'rotate(-90deg)';
  }
}

var makeClintonDancer = function (top, left) {
  return new ClintonDancer(top, left);
};
