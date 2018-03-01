module.exports = function getZerosCount(number) {
  // your implementation
  var x = 1;
  var zeros =0;
  while (Math.pow(5, x) <=number ){
    zeros = zeros + parseInt(number/Math.pow(5, x));
    x++;
  }
    return zeros;
}
