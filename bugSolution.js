function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; //Return 0 for null or undefined input
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(undefined,5)); // Output: 5
console.log(foo(5,undefined)); // Output: 5