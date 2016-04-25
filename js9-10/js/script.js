$(function() {
  $('.single-item').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerMode: true,
    cssEase: 'linear'
  });
  $('select').selectBox({
    'menuTransition': 'fade'
  });

$(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
function() {
     changeCheckStart($(this));
});
function changeCheck(el)
{
    var el = el,
        input = el.find("input").eq(0);
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
    return true;
}
function changeVisualCheck(input)
{
var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }
    else
    {
        wrapInput.addClass("niceChecked");
    }
}

function changeCheckStart(el) {
  try {
var el = el,
    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
    if(checkChecked)
        el.after("<span class='niceCheck niceChecked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
    else
        el.after("<span class='niceCheck'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
    if(checkDisabled)
    {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
    /* цепляем обработчики стилизированным checkbox */
    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
    if(jQuery.browser.msie)
    {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
    }
    el.remove();
}
catch(e) {
    // если ошибка, ничего не делаем
}
    return true;
}

//MENU
  $('.dropdown').hover(
    function () {
    $(this).children('.submenu').slideDown(500)
    .animate({
      backgroundColor: "rgb(200,150,150)"
    }, 200);
    },
    function () {
      $(this).children('.submenu').slideUp(200)
      .animate({
        backgroundColor: "rgb(255,100,100)"
      }, 500);;
    }
);
})
