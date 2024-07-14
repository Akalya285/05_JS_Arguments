var showSum;

showSum = function (number1, number2) {
  var total = number1 + number2;
  console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

// 1) Use the showSum function to add 56 and 74
showSum(56, 74);

// 2) Create a showProduct function to multiply two numbers
var showProduct = function (number1, number2) {
  var product = number1 * number2;
  console.log("The product is " + product);
};

// 3) Use your function to multiply three pairs of numbers
showProduct(3, 5);
showProduct(7, 8);
showProduct(1.5, 2.2);

// 4) Create showDifference and showQuotient functions for subtraction and division
var showDifference = function (number1, number2) {
  var difference = number1 - number2;
  console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
  var quotient = number1 / number2;
  console.log("The quotient is " + quotient);
};

// Test the showDifference and showQuotient functions
showDifference(10, 4);
showDifference(3.5, 1.2);
showQuotient(10, 2);
showQuotient(9, 3);
