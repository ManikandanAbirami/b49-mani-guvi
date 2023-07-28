function fetchDataWithCallback() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    }, 1000);
  });
}
async function processDataWithAsyncAwait() {
  try {
    const data = await fetchDataWithCallback();
    console.log("Data received from ASYNC AWAIT:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

processDataWithAsyncAwait();
