import React, {useState, useEffect} from 'react'

function LifeCycleDemo() {
    //Mounting Phase
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted/Loaded!!");
        // return () => {
        //     console.log("Component unmounted!!!");
        // }
    },[]); //Empty dependency array runs this effect only once after the initial render

    //Updating Phase
    useEffect(() => {
        console.log('Component updated!!!');
        // return () => {
        //     console.log("Component updated cleanup!!");
        // };
    }); //No dependency array, runs after every render
  return (
    <div>
        <h1>LifeCycleDemo</h1>
        <p>Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LifeCycleDemo