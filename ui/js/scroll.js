$(document).ready(function() {
  $('.features').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#features-section').offset().top
      },
      1500
    );
  });

  $('.contact').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1500
    );
  });
});
