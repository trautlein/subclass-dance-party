class ClintonEmitter {
  constructor() {
    this.y = Math.floor(($('body').height() - 100 ) * Math.random());
    this.x = ($('body').width() - 50) * Math.random();
    this.rate = 300; // one per second
    this.self = this; // need to save and re-use this in step() due to the setTimeout
    this.clintons = []; // maintain a list of emitted clintons
    this.step(this.self); // call step the first time, start it
  }
  step(context) {
    setTimeout(function() {
      // launch new clinton somewhere around this emitter
      var newClintonTop = context.y + (Math.floor(Math.random() * 100) - 50);
      var newClintonLeft = context.x + (Math.floor(Math.random() * 100) - 50);
      var newClintonSpeed = (Math.floor(Math.random() * 30));
      var newClintonAngle = (Math.floor(Math.random() * 359));
      var newClintonLife = (Math.floor(Math.random() * 20));
      var newClinton = new ClintonDancer(newClintonTop, newClintonLeft, newClintonSpeed, newClintonAngle, newClintonLife, true);
      context.clintons.push(newClinton);
      $('body').append(newClinton.$node);
      context.step(context);
    }, context.rate);
  }
}