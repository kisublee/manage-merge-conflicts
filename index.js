const sumOfAllFears = (...numbers) => {
    if (!numbers.every((a) => !Number.isNaN(a)))
      throw "All arguments must be numbers.";
    return numbers.reduce((a, b) => a + b);
  }
  
  console.log(sumOfAllFears(1, 2, 3)); //> 6
  console.log(sumOfAllFears(10, "B", 20)); //> error All arguments must be numbers.