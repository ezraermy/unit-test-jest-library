const stringLength = (str) => {
  if(str.length >= 1 && str.length <= 10){
    return str.length;
  }else{
    throw new Error('You input exceeds the required amount of character');
  }
};

const revStr = (s) => {
  return s
  .split('')
  .reverse()
  .join('')
} 

class Calculator {
  add(a,b){
    return a + b;
  }
  sub(a,b){
    return a - b;
  }
  mul(a,b){
    return a * b;
  }
  div(a,b){
    if (b == 0) throw new Error('div by 0 not allowed');
    return a / b;
  }
}

const cal = new Calculator;

const capStr = (string) => {
  return string.toUpperCase()
}


module.exports = {stringLength, revStr, cal, capStr};