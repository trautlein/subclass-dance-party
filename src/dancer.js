class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
  }
  step(context) {
    context = context || this;
    setTimeout(function() {
      context.step(context);
    }, context.timeBetweenSteps);
  }
  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
}

/*
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  //this.step();

};
Dancer.prototype.step = function(context) {
  context = context || this;
  setTimeout(function() {
    context.step(context);
  }, context.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

var makeDancer = function (top, left, timeBetweenSteps) {
  return new Dancer(top, left, timeBetweenSteps);
};*/
