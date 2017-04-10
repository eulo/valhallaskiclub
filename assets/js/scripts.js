$(window).scroll(function (event) {
  if ($(window).scrollTop() > 430) {
    $('.menu-logo').removeClass('fade');
  } else {
    $('.menu-logo').addClass('fade');
  }
});

$('.scrolltop').click(function(event) {
  event.preventDefault();
  $("html, body").stop().animate({scrollTop:0}, '500', 'swing'); 
});
