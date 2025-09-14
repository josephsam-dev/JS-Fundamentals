const myObject = {
  number: 0,
  incr() {
    this.number += 1;
  }
};

// Example usage
myObject.incr();
console.log(myObject.number); // 1

myObject.incr();
console.log(myObject.number); // 2
