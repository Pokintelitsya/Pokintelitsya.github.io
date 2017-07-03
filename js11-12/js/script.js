$(function () {
  $('.carousel').carousel();

  var tmplElem = $('#myTmpl').html();
  var data = {
    title: 'Покинтелица Дмитрий Александрович',
    prof: 'Инженер у телеком провайдера',
    obj: 'Хочу учить фронтенд, потому что:',
    obj1: 'Пора бы',
    obj2:'Приятно достигать поставленные цели',
    obj3:'Хочу чтобы это стало моей основной профессией',
    contacts:'Мой контактный телефон:<br>+380995166076 <br>Мой профиль :<br><a href="https://www.facebook.com/pokyntelytsia">facebook.com/pokyntelytsia</a>',
    feedback:'Фидбек:<br>Иногда и заборы строить интересно!'
  };
  var content = tmpl(tmplElem, data);
  $('body').append(content);
})
