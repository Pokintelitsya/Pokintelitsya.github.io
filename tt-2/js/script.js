jQuery(function($) {

$.mask.definitions['~']='[+-]';

$('#phone').mask('+380 (99) 999 99 99');

 var p=document.forms['form']['phone'];
 var e=document.forms['form']['email'];
 var pas=document.forms['form']['password'];
 var pas2=document.forms['form']['password2'];



p.onblur = function () {
    if (p.value.length==0){
       document.getElementById('phonef').innerHTML='&#10006;';
       return false;
    }else {
      document.getElementById('phonef').innerHTML='&#10004;'
      document.getElementById('phonef').style.color = "green";
    }
}

e.oninput = function () {
  var em=document.forms['form']['email'].value;
  at=em.indexOf("@");
  dot=em.indexOf(".");

  if (at<1 || dot <1 || em.length==0){
     document.getElementById('emailf').innerHTML='&#10006;';
     return false;
  }else {
    document.getElementById('emailf').innerHTML='&#10004;'
    document.getElementById('emailf').style.color = "green";
  }
}

pas.oninput = function () {
  if (pas.value.length < 6){
     document.getElementById('passwordf').innerHTML='&#10006; Less then 6';
     return false;
  }
  else {
    document.getElementById('passwordf').innerHTML='&#10004;'
    document.getElementById('passwordf').style.color = "green";
  }
}

pas2.oninput = function () {
  if (pas2.value.length < 6 ){
     document.getElementById('password2f').innerHTML='&#10006; Less then 6';
     return false;
  }else
  if ( pas2 != pas ){
     document.getElementById('password2f').innerHTML='&#10006; Wrong pass.';
     return false;
  }else {
    document.getElementById('password2f').innerHTML='&#10004;'
    document.getElementById('password2f').style.color = "green";
  }
}

});
