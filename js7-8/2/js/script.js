$(function () {
    var timer;

    $(".input").hover(function(){
      var animElem = $(this).parent().next();
      timer = setTimeout(function(){
      animElem.animate({opacity: '1'}, "slow");}, 500);
    },function(){
      if(timer) {
      clearTimeout(timer);
      timer = null
    }
    $(this).parent().next().animate({opacity: 0}, 50);
    })

    $(show).click(function(){
      $(".help").animate({opacity: '1'}, "slow");
    })
})
