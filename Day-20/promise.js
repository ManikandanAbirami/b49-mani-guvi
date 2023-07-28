function fetchDataWithCallback() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    }, 1000);
  });
}

fetchDataWithCallback()
  .then((val) => {
    console.log("Data received from PROMISE:", val);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
