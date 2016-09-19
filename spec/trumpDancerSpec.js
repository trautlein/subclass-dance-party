describe('TrumpDancer', function() {

  var trumpDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    trumpDancer = new TrumpDancer(10, 20, timeBetweenSteps);
  });

  it('should have a node with the trump class', function() {
    expect(trumpDancer.$node.hasClass('trump')).to.be.true;
  });
  it('and that node should not also have the clinton class', function() {
    expect(trumpDancer.$node.hasClass('clinton')).to.be.false;
  });

  /*it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    //console.log(blinkyDancer);
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      //expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });*/
});
