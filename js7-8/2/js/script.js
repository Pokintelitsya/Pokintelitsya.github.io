$(function () {
    $(".help>div").css({opacity: 0});

    $("#firstname").hover(function(){
      $("#helpFirstname").animate({opacity: '1'}, "slow");
    },function(){$("#helpFirstname").animate({opacity: 0}, 50);
    })
    $("#lastname").hover(function(){
      $("#helpLastname").animate({opacity: '1'}, "slow");
    },function(){$("#helpLastname").animate({opacity: 0}, 50);
    })
    $("#address").hover(function(){
      $("#helpAddress").animate({opacity: '1'}, "slow");
    },function(){$("#helpAddress").animate({opacity: 0}, 50);
    })

    $(show).click(function(){
      $("#helpFirstname").animate({opacity: '1'}, "slow");
      $("#helpLastname").animate({opacity: '1'}, "slow");
      $("#helpAddress").animate({opacity: '1'}, "slow");
    })
})
