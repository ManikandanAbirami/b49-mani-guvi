function performCalculation(operation) {
  const num1 = Number(document.getElementById("num1").value); //always returns string
  const num2 = Number(document.getElementById("num2").value);

  //   const num1 = Number(prompt("Please enter the value of number 1: "));
  //   const num2 = Number(prompt("Please enter the value of number 2: "));

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operation";
  }
  const msg = confirm("Do you want to show the result???");
  if (msg === true) {
    document.getElementById("result").innerText = result;
  } else {
    document.getElementById("result").innerText = "Result cannot be shown!!!!";
  }

  //alert(result);
}

const addElem = document.getElementById("add");
addElem.addEventListener("click", function () {
  performCalculation("add");
});

setInterval(function () {
  alert("Hi, hru???");
}, 20000);

setTimeout(function () {
  console.log("This message will be logged after 5000 milliseconds!!!!");
}, 5000);
