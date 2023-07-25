let promiseObj = new Promise((resolve, reject) => {
  console.log("Check for the stock to proceed with this order");
  //   resolve("Item is available!!!");
  reject("Item is out of stock");
});

console.log(promiseObj);

//Way 1:
// promiseObj.then(
//   (val) => {
//     console.log("Order status --- ", val);
//   },
//   (err) => {
//     console.log("Order status --- ", err);
//   }
// );

//Way 2:
promiseObj
  .then((val) => {
    console.log("Order status --- ", val);
  })
  .catch((err) => {
    console.log("Order status --- ", err);
  });
