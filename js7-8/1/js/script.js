$(function(){
  var $tabs = $('.tabs');


  $tabs.click(function(){
    switch ($(this).attr('id')) {
      case 'tab-1':{
        $('.text-1').show();
        $('.text-2').hide();
        $('.text-3').hide();
      }

        break;
      case 'tab-2':{
        $('.text-1').hide();
        $('.text-2').show();
        $('.text-3').hide();
      }

        break;
      case 'tab-3':
        $('.text-1').hide();
        $('.text-2').hide();
        $('.text-3').show();
        break;
      default:

    }
    $('.active').removeClass("active");
    $(this).addClass("active");
  })


})
