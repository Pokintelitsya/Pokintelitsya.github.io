(function($){

  $.fn.carousel=function(options) {
      var defaults = {
        infinite: true
      };
      var settings = $.extend(defaults, options);

      $(".carousel-wrapper").prepend("<div class='arrow left-arrow'></div>")
      .append("<div class='arrow right-arrow'></div>");
      var leftArrow = $('.left-arrow');
      var rightArrow = $('.right-arrow');
      var elem = $('.carousel-list');
      var offset = 325;
      var currentOffset = -975;
      var elemList = elem.find('li');
      var elemCount = elemList.length;
      if(elemCount > 3){
        for( var i = 1; i<4; i++)
        $(elemList[elemCount-i]).clone().prependTo(elem);
      }
      var elemList = elem.find('li');
      var elemCount = elemList.length;
      elem.css("width", function(){
        return elemCount*325;
      });
// leftScroll
      leftArrow.click(function () {
        if(settings.infinite){
          if ( currentOffset != -325 && currentOffset != 0 ){
            currentOffset += offset;
            elem.animate({left: currentOffset+'px'}, 500);
          }else {
                $.when(elem.animate({left: 0 + 'px'}, 500)).then(function(){
                currentOffset = -1950;
                elem.css("left", currentOffset);
                });
            }
        }else {
          if ( currentOffset < -975 ){
            currentOffset += offset;
            elem.animate({left: currentOffset+'px'}, 500);
          }
        }
      })
// rightScroll
      rightArrow.click(function() {
        if(settings.infinite){
          if( currentOffset != -1625 && currentOffset != -1950){
            currentOffset -= offset;
            elem.animate({left: currentOffset+'px'}, 500);
          }else {
            $.when(elem.animate({left: -1950 + 'px'}, 500)).then(function(){
              currentOffset = 0;
              elem.css("left", currentOffset);
            });
          }
        }else if(currentOffset > -1950){
          currentOffset -= offset;
          elem.animate({left: currentOffset+'px'}, 500);
         }
      })

  }
})(jQuery);
