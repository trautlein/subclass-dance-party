/*var makeJohnsonDancer = function(top, left, timeBetweenSteps) {
  var JohnsonDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};*/

var SandersDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node = $('<span class="sanders dancer"></span>');
  this.timeBetweenSteps = 100;
  this.setPosition(top, left);
  this.self = this;
  this.step();
};


SandersDancer.prototype = Object.create(Dancer.prototype);
SandersDancer.prototype.constructor = SandersDancer;
SandersDancer.prototype.step = function(context) {
  context = context || this.self;
  Dancer.prototype.step.call(this.self);
  //this.$node.toggle();
};

var makeSandersDancer = function (top, left, timeBetweenSteps) {
  return new SandersDancer(top, left, timeBetweenSteps);
};