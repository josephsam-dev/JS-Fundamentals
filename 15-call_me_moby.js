function callMeMoby(x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

// Example usage
function sayHello() {
  console.log("Hello");
}

callMeMoby(3, sayHello); // Should print "Hello" 3 times
