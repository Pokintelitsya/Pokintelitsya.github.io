$(function () {
    $(".help>div").css({opacity: 0});
    var timer;

    $("#firstname").hover(function(){
      timer = setTimeout(function(){$("#helpFirstname").animate({opacity: '1'}, "slow")}, 500);
    },function(){
      if(timer) {
      clearTimeout(timer);
      timer = null
    }
    $("#helpFirstname").animate({opacity: 0}, 50);
    })

    $("#lastname").hover(function(){
      timer = setTimeout(function(){$("#helpLastname").animate({opacity: '1'}, "slow")}, 500);
    },function(){
      if(timer) {
      clearTimeout(timer);
      timer = null
    }$("#helpLastname").animate({opacity: 0}, 50);
    })

    $("#address").hover(function(){
      timer = setTimeout(function(){$("#helpAddress").animate({opacity: '1'}, "slow")}, 500);
    },function(){
      if(timer) {
      clearTimeout(timer);
      timer = null
    }$("#helpAddress").animate({opacity: 0}, 50);
    })

    $(show).click(function(){
      $("#helpFirstname").animate({opacity: '1'}, "slow");
      $("#helpLastname").animate({opacity: '1'}, "slow");
      $("#helpAddress").animate({opacity: '1'}, "slow");
    })
})
