const allNumbers = (...c) => {
    if (!c.every((a) => Number.isNumber(a))) {
      throw "All arguments must be numbers.";
            
    }
        return c.reduce((a, b) => a + b);
  }
  
  allNumbers(1, 2, 3); //> 6
  allNumbers(10, "B", 20); //> error All arguments must be numbers.