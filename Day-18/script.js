// let promiseObj = new Promise((resolve, reject) => {
//   resolve("SUCCESS!!");
// });

// promiseObj.then((val) => {
//   console.log(val);
// });

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 completed");
      // reject("Task 2 REJECTED!!!!");
    }, 1000);
  });
}

function asyncTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 completed");
    }, 1000);
  });
}

asyncTask1()
  .then((val) => {
    console.log(val);
    return asyncTask2();
  })
  .then((val) => {
    console.log(val);
    return asyncTask3();
  })
  .then((val) => {
    console.log(val);
    console.log("All tasks completed!!!!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
