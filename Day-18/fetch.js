async function fetchData() {
  const apiUrl = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.common == "Peru") {
        console.log(data[i].flag);
      }
    }
  } catch (err) {
    console.log("Error fetching Data: ", err);
  }
}

fetchData();
// fetch(apiUrl)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//       //   console.log("$$%$%$%$%$%$% ",response.json());
//     }
//   })
//   .then((val) => {
//     console.log(val);
//     for (var i = 0; i < val.length; i++) {
//       if (val[i].name.common == "Peru") {
//         console.log(val[i].flag);
//       }
//     }
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });
