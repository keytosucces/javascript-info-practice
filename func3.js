// Function min(a, b)
// importance: 1
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a > b ? b : a;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));