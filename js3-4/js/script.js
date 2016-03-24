
var testCreate = {

  titleCreate: function(){
    var h1 = document.createElement('h1');
    h1.innerHTML = "Тест по программированию";
    h1.className = "text-center";
    var parentEl = document.body;
    parentEl.appendChild(h1);
  },
//wrapper for forms
  formCreate: function(){
    var frm = document.createElement('form');
    frm.className = "container";
    document.body.appendChild(frm);
  },
//Test unit
  itemCreate: function(itemCount, checkboxCount){
    var frm = document.body.querySelector('form.container');

        for(var i = 0; i < checkboxCount; i++){

        var h3 = document.createElement('h3');
        var header = (i + 1) + ". Вопрос №" + (i + 1);
        h3.innerHTML = header;
        frm.appendChild(h3);

            for(var k = 0; k < itemCount; k++){
              var div = document.createElement('div');
              div.className = "checkbox container";
              frm.appendChild(div);

              var label = document.createElement('label');
              var labelContent = "Вариант ответа №" + (k + 1);
              label.innerHTML = labelContent;
              div.appendChild(label);

              var input = document.createElement('input');
              input.type = "checkbox";
              label.insertBefore(input, label.firstChild);
            }
        }
  },

  buttonCreate: function(){
    var form = document.body.querySelector('form.container');
    var div = document.createElement('div');
    div.className = "container";
    form.appendChild(div);
    var input = document.createElement('input');
    input.type = "button";
    input.value = "Проверить мои результаты";
    input.className = "btn btn-default btn-lg btn-block active";
    div.appendChild(input);
  }
}

testCreate.titleCreate();
testCreate.formCreate();
testCreate.itemCreate(3, 3);
testCreate.buttonCreate();
