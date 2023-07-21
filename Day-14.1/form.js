const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); //document.createElement("tr");
  const nameCol = newRow.insertCell(); //document.createElement("td");
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");

  nameCol.textContent = name;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");

  form.reset();
});
