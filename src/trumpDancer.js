class TrumpDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    this.$node = $('<span class="trump dancer"></span>');
    this.timeBetweenSteps = 100;
    this.setPosition(top, left);
    this.uniqueId = Math.floor(Math.random() * 1000);
    this.self = this;
    this.step();
  }
  step(context) {
    context = context || this.self;
    Dancer.prototype.step.call(this.self);
  }
  die() {
    var context = this;
    setTimeout(function() {
      context.$node[0].style.transition = 'all 1s';
      context.$node[0].style.transform = 'rotate(90deg)';
      context.$node[0].style.top = (parseInt(context.$node[0].style.top) + 120) + 'px';
      setTimeout(function() {
        context.$node[0].style.transform = 'rotate(90deg) scale(0.01)';
      }, 1000);
    }, Math.max(Math.floor(Math.random() * 2000), 500));
  }

}

var makeTrumpDancer = function (top, left, timeBetweenSteps) {
  return new TrumpDancer(top, left, timeBetweenSteps);
};
