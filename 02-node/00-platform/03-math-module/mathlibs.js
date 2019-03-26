module.exports = function (){
  return {
    add: function(num1, num2) { 
         // add code here 
         
         var sum = num1 + num2;
         return sum;
    },
    multiply: function(num1, num2) {
         // add code here 
         var mult = num1 * num2;
         return mult;
    },
    square: function(num) {
         // add code here 
         var sq = num*num;
         return sq;
    },
    random: function(num1, num2) {
         // add code here
         return Math.floor(Math.random()*num2+num1);
    }
  }
};