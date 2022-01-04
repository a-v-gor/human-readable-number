module.exports = function toReadable (number) {
  let result = '';

  function returnOnes(num){
    if(num == 1) {
      return 'one'};
    if(num == 2) {
      return 'two'};
    if(num == 3) {
      return 'three'};
    if(num == 4) {
      return 'four'};
    if(num == 5) {
      return 'five'};
    if(num == 6) {
      return 'six'};
    if(num == 7) {
      return 'seven'};
    if(num == 8) {
      return 'eight'};
    if(num == 9) {
      return 'nine'};
  }

  function returnTeens(num){
    if(num == 10) {
      return 'ten'};
    if(num == 11) {
      return 'eleven'};
    if(num == 12) {
      return 'twelve'};
    if(num == 13) {
      return 'thirteen'};
    if(num == 15) {
      return 'fifteen'};
    if(num == 18) {
      return 'eighteen'};
    return(returnOnes(num%10)+'teen');
  }

  function returnTens(num){
    num = Math.floor(num/10);    
    if(num == 2) {
      return 'twenty'};
    if(num == 3) {
      return 'thirty'};
    if(num == 4) {
      return 'forty'};
    if(num == 5) {
      return 'fifty'};
    if(num == 8) {
      return 'eighty'};
    return(returnOnes(num)+'ty');
  }

  function returnHundreds(num){
    num = Math.floor(num/100);
    return(returnOnes(num) + ' hundred')
  }
  
  // Начинаем формировать результат с сотен. Если в конце не нули - добавляем в
  // результат пробел. Убираем из проверяемого сотни.

  if(String(number).length==3){
    result = returnHundreds(number);
    if(number%100 > 0){
      result += ' ';
    };
    number = number%100;
  };

  // Проверка однозначных чисел. Если проверяем ноль и результат не пустой -
  // ноль отбрасывается. Результат прирастает полученной строкой.
  if(String(number).length==1){
    if(number == 0) {
      if(!result){
        return 'zero';
      } else {
        return result;
      }
    } else {
      result += returnOnes(number);
    };    
  };

  // Проверка двузначных чисел. В зависимости от значения проверяемого (<20, 
  // целые десятки или нет) добавляем результат.
  if(String(number).length==2){
    if(number < 20){
      result += returnTeens(number);
    } else if(number%10==0){
      result += returnTens(number);
    } else {
      result += returnTens(number) + ' ' + returnOnes(number%10);
    };   
  };

  return result;
}