module.exports = function getZerosCount(number) {
  // your implementation
  var zerosCount = 0;
  var x = 1;
  while (Math.pow(5, x) <=number ){
    zerosCount = zerosCount + parseInt(number/Math.pow(5, x));
    x++;
  } 
  return zerosCount;
}
