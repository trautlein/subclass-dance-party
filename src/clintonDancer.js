var ClintonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.timeBetweenSteps = 100;
  this.setPosition(top, left);
  this.self = this;
  this.step();
};


ClintonDancer.prototype = Object.create(Dancer.prototype);
ClintonDancer.prototype.constructor = ClintonDancer;
ClintonDancer.prototype.step = function(context) {
  context = context || this.self;
  Dancer.prototype.step.call(this.self);
  this.$node.toggle();
};

var makeClintonDancer = function (top, left, timeBetweenSteps) {
  return new ClintonDancer(top, left, timeBetweenSteps);
};
