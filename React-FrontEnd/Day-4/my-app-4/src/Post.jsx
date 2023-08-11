import React, { useState } from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
    const arr = ["Item-1","Item-2","Item-3","Item-4"];
    // let flag = true;
    const [flag, setFlag] = useState(true);
    const handleClickAdd = () => {
        setFlag(false);
    }
    const handleClickRemove = () => {
        setFlag(true);
    }
  return (
    <>
    {console.log("Component loaded!!!!")}
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <ul>
        {
            arr.map((item) => (
                <li key={item}>{item}</li>
            ))
        }
    </ul>
    {flag? <button onClick={handleClickAdd}>Add</button> : <button onClick={handleClickRemove}>Remove</button>}
    <Like />
    <Comment />
    </>
  )
}

export default Post