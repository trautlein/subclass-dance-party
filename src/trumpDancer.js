var TrumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node = $('<span class="trump dancer"></span>');
  this.timeBetweenSteps = 100;
  this.setPosition(top, left);
  this.self = this;
  this.step();
};


TrumpDancer.prototype = Object.create(Dancer.prototype);
TrumpDancer.prototype.constructor = TrumpDancer;
TrumpDancer.prototype.step = function(context) {
  context = context || this.self;
  Dancer.prototype.step.call(this.self);
  // this.$node.toggle();
};

var makeTrumpDancer = function (top, left, timeBetweenSteps) {
  return new TrumpDancer(top, left, timeBetweenSteps);
};
