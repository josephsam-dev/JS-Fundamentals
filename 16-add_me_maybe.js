function addMeMaybe(number, theFunction) {
  const newNumber = number + 1;
  theFunction(newNumber);
}

// Example usage
function printNumber(num) {
  console.log(num);
}

addMeMaybe(5, printNumber); // Should print 6
