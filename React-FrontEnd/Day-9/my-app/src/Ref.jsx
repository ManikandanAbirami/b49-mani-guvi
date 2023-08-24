import React, { useState, useRef } from 'react'

function Ref() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function handleClick () {
        setCount(count + 1);
        countRef.current++;

        // console.log("State ",count);
        console.log("Ref ",countRef.current);
    }

  return (
    <div>
        <h1>useRef</h1>
        <p>{countRef.current}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Ref