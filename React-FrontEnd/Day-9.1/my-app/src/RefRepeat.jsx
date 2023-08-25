import React, { useRef, useState } from 'react'

function RefRepeat() {
    const countRef = useRef(0);

    function handleClick () {
        countRef.current++;

        console.log("Ref value: ", countRef.current);
    }
  return (
    <div>
        <h1>useRef Demo:</h1>
        <p>Ref Value: {countRef.current}</p>
        <button onClick={handleClick}>Increment!!</button>
    </div>
  )
}

export default RefRepeat