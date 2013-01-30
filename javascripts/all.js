$(document).ready(function() {

  /**
   * Swipe Gestures on Instagrams.
   */
  var instagrams = $('.instagram img');

  // Swipe left to move it to the left.
  instagrams.swipeleft(function() {
    var el = $(this);
    if( el.hasClass('right') ) {
      instagrams.removeClass();
    } else {
      instagrams.removeClass();
      el.addClass('left');
    };
  });

  // Swipe right to move it to the right/
  instagrams.swiperight(function() {
    var el = $(this);
    if( el.hasClass('left') ) {
      instagrams.removeClass();
    } else {
      instagrams.removeClass();
      el.addClass('right');
    };
  });

  // Tap to move it back to original position.
  instagrams.click(function() {
    $(this).removeClass();
  });

  /**
   * View flip.
   */
  var mapIcon = $('header .flip .front');
  var feedIcon = $('header .flip .back');
  var body = $('body');

  // Flip body when tapping the map icon.
  mapIcon.click(function() {
    body.addClass('flipped');
  });

  // "Unflip" body when tapping the feed icon.
  feedIcon.click(function() {
    body.removeClass('flipped');
  });

});
