$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });


  $('.line-up-button').on('click', function (event) {
    var hillarys = [];
    var trumps = [];
    for (var i = 0; i < dancers.length; i++) {
      if (dancers[i].$node.hasClass('clinton')) {
        hillarys.push(dancers[i]);
      }
      if (dancers[i].$node.hasClass('trump')) {
        trumps.push(dancers[i]);
      }
    }
    for (var i = 0; i < hillarys.length; i++) {
      hillarys[i].$node[0].style.left = `${200 - i * 25}px`;
      hillarys[i].$node[0].style.top = `${i * 30 + 50}px`;     
    }
    for (var i = 0; i < trumps.length; i++) {
      trumps[i].$node[0].style.left = `${600 + i * 25}px`;
      trumps[i].$node[0].style.top = `${i * 30 + 50}px`;     
    }
  });
});

