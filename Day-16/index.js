function walk() {
  console.log("Walking!!");
  run();
}

function run() {
  console.log("Running!!");
  setTimeout(() => {
    console.log("Drink water!!!");
  }, 2000);
  rest();
}

function rest() {
  console.log("Rest!!!");
}

walk();
