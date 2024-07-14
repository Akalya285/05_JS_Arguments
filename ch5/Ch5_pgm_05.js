var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

// 1) Define a cube function that cubes any number passed in as an argument
var cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

// 2) Call the cube function four times with different arguments to test it
cube(2);
cube(-3);
cube(10);
cube(0.5);

// 3) Define and test a squareRoot function to find square roots and display them on the console
var squareRoot = function (numberToSquareRoot) {
  var result;
  result = Math.sqrt(numberToSquareRoot);
  console.log("The square root of " + numberToSquareRoot + " is " + result);
};

// Test the squareRoot function with different arguments
squareRoot(9);
squareRoot(16);
squareRoot(25);
squareRoot(2);
