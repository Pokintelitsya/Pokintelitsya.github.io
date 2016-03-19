
//Function definition
function myPow(){
  var exp = 0;
  var base = 0;
  base = prompt('Введите основание: ', base);
  exp = prompt('Введите показатель степени: ', exp);
  exp = +exp;
  base = +base;
  if( isNaN(exp) || isNaN(base)){
    return 'Incorrect input';
  }
  var result = 1;
  if( exp < 0 ){
    for (var i = 0; i > exp; i--) {
      result *= base;
    }
    result = 1 / result;
    return result;
  } else if( exp == 0 ){
      result = 1;
      return result;
    } else{
        for ( var i = 0; i < exp; i++ ) {
          result *= base;
        }
        return result;
      }
    return 'incorrect';
}

console.log (myPow());
