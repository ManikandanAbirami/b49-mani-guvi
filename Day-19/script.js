function operation(a, b) {
  try {
    // a = 10; b = 20; 10 - 20 = -10
    if (b > a) {
      throw new Error("B is greater than A!!!"); //Custom Error
    }
    const result = a - b;
    console.log("Result: ", result);
  } catch (err) {
    console.log("Error occurred: ", err);
  }
}

// try {
// } catch (err) {
//   console.log("Error occurred: ", err);
// }
//throw new Error();

operation(10, 8);
