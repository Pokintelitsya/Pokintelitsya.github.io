function arrSearch () {
  var arr = [];
  var str = '';
  var offer;
  for (var i = 0; i < 5; i++) {
    offer = 'Введите имя №' + (i+1);
    str = (prompt(offer));
    if(str == ''){
      alert('Пустое имя.');
      i--;
    }else {
      arr.push(str);
    }
  }
  str = prompt('Ведите имя для поиска');
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == str){
      str = str + ", вы успешно вошли.";
      return str;
    }
  }
  return 'Имя не найдено';
}

alert(arrSearch());
