const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
      //   console.log("$$%$%$%$%$%$% ",response.json());
    }
  })
  .then((val) => {
    console.log(val);
    for (var i = 0; i < val.length; i++) {
      if (val[i].name.common == "Peru") {
        console.log(val[i].flag);
      }
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
