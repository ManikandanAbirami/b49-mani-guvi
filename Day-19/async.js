function getToy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const toy = "Teddy bear";
      resolve(toy);
      //   reject("No luck!!");
    }, 2000);
  });
}

async function playWithToys() {
  console.log("Let's play with cars and blocks!!");
  try {
    const toy = await getToy();
    console.log("Yay! I got my", toy);
    console.log("Now i can continue playing with other toys!!");
  } catch (err) {
    console.log("Oops something went wrong: ", err);
  }
  //   getToy()
  //     .then((val) => {
  //       console.log("Yay! I got my", val);
  //       console.log("Now i can continue playing with other toys!!");
  //     })
  //     .catch((err) => {
  //       console.log("Error occurred: ", err);
  //     });
}

playWithToys();

function add(a, b) {
  return a + b;
}

var c = add(1, 2);
