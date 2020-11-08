$(document).ready(function(){
    $( ".mini-card" ).hover(
        function() {
        $("#i"+ $(this).attr('id')).css("color", "#3c6e71");
        $(this).addClass('transitionCard');
        }, function() {
        $("#i"+ $(this).attr('id')).css("color", "#353535");
        $(this).removeClass('transitionCard');
        }
    );
});
function scrollOnPageLoad() {
    // to top right away
    if (window.location.hash) scroll(0, 0);
    // void some browsers issue
    setTimeout(scroll(0, 0), 2);
    var hashLink = window.location.hash;
      if ($(hashLink).length) {
        $(function () {
            // *only* if we have anchor on the url
            // smooth scroll to the anchor id
            $('html, body').animate({
              scrollTop: $(window.location.hash).offset().top - 100
            }, 100);
        });
      }
  }