// Sample data to store initial records
let data = [
  { name: "Guvi WD Batch 49 - Tamil", age: 20 },
  { name: "Guvi WD Batch 50 - Tamil", age: 21 },
];

//Function to display data in the table
function displayData() {
  const dataRows = document.getElementById("dataRows");
  dataRows.innerHTML = "";
  debugger;
  data.forEach((value, index) => {
    const row = `
        <tr>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>
                <button class="btn btn-info edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </td>
        </tr>
    `;
    dataRows.insertAdjacentHTML("beforeend", row);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value;
  const age = ageInput.value;

  //Add data to the array
  data.push({ name, age });

  //Clear form fields
  nameInput.value = "";
  ageInput.value = "";

  //Display updated data in the table
  displayData();
}

// Attach event listeners
document
  .getElementById("crudForm")
  .addEventListener("submit", handleFormSubmit);

displayData();
