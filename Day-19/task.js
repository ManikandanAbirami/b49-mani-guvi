class CheckProduct {
  // constructor(){
  // }
  async getDetails() {
    try {
      let details = await this.aboutproduct();
      console.log(`update ${details}`);
    } catch (err) {
      console.log(err);
    }
  }

  aboutproduct() {
    return new Promise((resolve, reject) => {
      if (!stock) {
        setTimeout(() => {
          resolve("This product is in Stock");
        }, 3000);
      } else {
        reject("Sorry! This Product is out of Stock");
      }
    });
  }
}
let stock = true;

let createObj = new CheckProduct();
// console.log(createObj)
createObj.getDetails();
