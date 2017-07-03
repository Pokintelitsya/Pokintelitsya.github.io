$(function(){
  'use strict';
/*------------------------*/
  var testData = {
    header: 'Тест по программированию',
    question1: '1.К какому участку скрипта применяется строгие правила ‘use strict’?',
    question2: '2.Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)?',
    question3: '3.Как много блоков catch необходимо объявлять в конструкции try-catсh?',
    answers1: [
      'Либо во всем скрипте, либо в отдельной функции.',
      'Внутри блока {}.',
      'Во всем скрипте.'
    ],
    answers2: [
      'null.',
      'undefined.',
      'window.'
    ],
    answers3: [
      'Один.',
      'Два.',
      'По одному блоку на каждую возникшую ошибку внутри блока try.'
    ],
    result: 'Ответьте на все вопросы!',
    correctAnsw: [1, 2, 1]
  }
/*------------------------*/
  localStorage.setItem('testData', JSON.stringify(testData));
  var tmplElem = $('#myTmpl').html();
  var data = JSON.parse(localStorage.getItem('testData'));
/*------------------------*/
  var content = tmpl(tmplElem, data);
  $('body').append(content);
  $("#myModal").click(function(){
    $("#myModal").css("display", "none").animate({opacity:0},500);;
    $("input[type='radio']").prop("checked", false);
  });
  /*------------------------*/
  $("#checkResult").click(function(){
    var answ = [0, 0, 0];
    for(var i = 1; i < 4; i++){
      if($("#q1-" + i).prop("checked"))
      answ[0] = i;
      if($("#q2-" + i).prop("checked"))
      answ[1] = i;
      if($("#q3-" + i).prop("checked"))
      answ[2] = i;
    };
    if(answ[0] && answ[1] && answ[2]){
      var numberOfCorrect = 0;
      for(var i = 0; i < 3; i++){
        if(answ[i] == data.correctAnsw[i])
        numberOfCorrect++;
      }
      $("#result").html("Правильных ответов дано: " + numberOfCorrect + "/3.");
    }
    $("#myModal").css("display", "block");
    $("#myModal").animate({opacity: 1.0},500);
  });
  /*------------------------*/
})
