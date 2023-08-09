import React from 'react'

function Home() {
    let x = 10;
    let y = 20;
    let arr = ["Manikandan", "John", "Martin"];
    // console.log("Hi, welcome!!! lets see the added value of x and y:", x+y);
    console.log(`Hi, welcome!!! lets see the added value of x and y: ${x+y}`)
  return (
    <> 
        <div>
            <h2>Hi, welcome!!! lets see the added value of x and y: {x+y}</h2>
        </div>
    </>
  )
}

export default Home