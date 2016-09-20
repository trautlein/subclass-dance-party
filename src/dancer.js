class Dancer {
  constructor(top, left, timeBetweenSteps = 100) {
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
  die() {
    var context = this;
    setTimeout(function() {
      context.$node[0].style.transition = 'all 1s';
      context.$node[0].style.transform = context.deathRotate;
      context.$node[0].style.top = (parseInt(context.$node[0].style.top) + 120) + 'px';
      setTimeout(function() {
        context.$node[0].style.transform = 'rotate(-90deg) scale(0.01)';
      }, 1000);
    }, Math.max(Math.floor(Math.random() * 2000), 900));
  }
  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
}
