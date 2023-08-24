import React, {useState, useRef} from 'react'
import { useEffect } from 'react';

function ClickGame() {
    // We will use state to remember the count of clciks
    const [clickCount, setClickCount] = useState(0);

    // We will use useRef to remember the timer
    const timerRef = useRef(null);
    const clickCountRef = useRef(clickCount);

    clickCountRef.current = clickCount;
    console.log("*********"+clickCountRef.current)

    

    //Function runs when you start the game
    const startGame = () => {
        setClickCount(0); //Reset the click count
        
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }

        //Set up a timer to stop the game after 10 seconds
        timerRef.current = setTimeout(() => {
            alert(`Game over! You clicked ${clickCountRef.current} times.`);
        }, 5000);
    };

    //Function to handle button clicks
    const handleClick = () => {
        setClickCount(clickCount + 1);
    }
  return (
    <div>
        <h1>Click the Button Game</h1>
        <p>Click count: {clickCount}</p>
        <button onClick={handleClick}> Click me!</button>
        <button onClick={startGame}> Start the Game</button>
    </div>
  )
}

export default ClickGame