var showMessage;

showMessage = function (message) {
    console.log("The message is:");
    console.log(message);
};

// Existing calls with different arguments
showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

// 2) Declare a myMessage variable and assign it a string value
var myMessage = "This is a new message using a variable.";

// 3) Call the showMessage function with myMessage as the argument
showMessage(myMessage);
