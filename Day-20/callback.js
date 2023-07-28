function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = [1, 2, 3];
    callback(data);
  }, 1000);
}

function processDataWithCallback(data) {
  console.log("Data received from CALLBACK:", data);
}

fetchDataWithCallback(processDataWithCallback);
