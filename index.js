function sumOfAllFears(...numbers) {
    if (!numbers.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return numbers.reduce((a, b) => a + b);
  }
  
  sumOfAllFears(1, 2, 3); //> 6
  sumOfAllFears(10, "B", 20); //> error All arguments must be numbers.