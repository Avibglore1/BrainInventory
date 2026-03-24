function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++; //increment counter
      return count;
    },
    decrement: function () {
      count--; //decrement counter
      return count;
    },
    reset: function () {
      count = 0; //reset to zero
      return count;
    },
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());