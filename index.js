function fn(...c) {
  if (!c.every((a) => typeof a === Number)) {
    throw "All arguments must be numbers.";
  }
  return c.reduce((a, b) => a + b);
}
