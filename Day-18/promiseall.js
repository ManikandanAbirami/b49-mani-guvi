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

function asyncTask4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 4 completed");
    }, 1000);
  });
}

Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()])
  .then((val) => {
    console.log(val);
    console.log("All tasks completed!!!!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
