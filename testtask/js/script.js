$(document).ready(function () {
  var button = $('#menu-button');
  var menu = $('.top-menu');

  button.hover(function(){menu.show().animate({opacity: 1}, 1000); button.animate({opacity: 0}, 400)},
  function(){if(!(menu.is(':hover'))){menu.animate({opacity: 0}, 1000).hide(); button.show().animate({opacity: 1}, 1000);};});

  menu.hover(function(){menu.show().animate({opacity: 1}, 1000);},
  function(){menu.animate({opacity: 0}, 1000).hide(); button.show().animate({opacity: 1}, 1000);});
});
