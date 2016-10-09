$(document).ready(function(){
  $('.single-item').slick({dots: true});

  var bannerItems = $('.banner-item');
  var bannerItemsPannel = bannerItems.find('.banner-panel');
  var collapsed = $('.banner-item-collapsed');
  var expanded = $('.banner-item-expanded');
  collapsed.find('.banner-status').text('-');
  expanded.find('.banner-status').text('+');

  bannerItemsPannel.click(function(){
    var thisParent = $(this).parent();
    if(thisParent.hasClass("banner-item-collapsed")){
      thisParent.removeClass("banner-item-collapsed").addClass("banner-item-expanded");
      thisParent.find('.banner-status').text('+');
    }else {
      if(thisParent.hasClass("banner-item-expanded")){
        thisParent.removeClass("banner-item-expanded").addClass("banner-item-collapsed");
        thisParent.find('.banner-status').text('-');
      };
    }

  });
});
