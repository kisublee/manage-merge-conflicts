function fn(...c) {
  if (!c.every((a) => !Number.isNaN(a))) throw "All arguments must be numbers.";
  return c.reduce((a, b) => a + b);
}

console.log(fn(1, 2, 3)); //> 6
console.log(fn(10, "B", 20)); //> error All arguments must be numbers.
