var ClintonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node = $('<span class="clinton dancer"></span>');
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
  // this.$node.toggle();
};

ClintonDancer.prototype.die = function() {
  var context = this;
  setTimeout(function() {
    context.$node[0].style.transition = 'all 1s';  
    context.$node[0].style.transform = 'scale(0.01)'; 
  }, 2000);
};

var makeClintonDancer = function (top, left, timeBetweenSteps) {
  return new ClintonDancer(top, left, timeBetweenSteps);
};
