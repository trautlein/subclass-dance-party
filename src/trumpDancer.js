var TrumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node = $('<span class="trump dancer"></span>');
  this.timeBetweenSteps = 100;
  this.setPosition(top, left);
  this.uniqueId = Math.floor(Math.random() * 1000);
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

TrumpDancer.prototype.die = function() {
  var context = this;
  setTimeout(function() {
    context.$node[0].style.transition = 'all 1s';  
    context.$node[0].style.transform = 'scale(0.01)'; 
  }, 2000);
};

var makeTrumpDancer = function (top, left, timeBetweenSteps) {
  return new TrumpDancer(top, left, timeBetweenSteps);
};
