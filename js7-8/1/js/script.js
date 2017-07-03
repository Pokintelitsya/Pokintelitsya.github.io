$(function(){
  var $tabs = $(".tabs");
  var $content = $(".text");
  $content.first().show();

  $tabs.click(function(){
    $content.hide();
    $(this).next().show();
    $(".active").removeClass("active");
    $(this).addClass("active");
  })
})
