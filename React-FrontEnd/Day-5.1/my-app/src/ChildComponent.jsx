import React from 'react'

function ChildComponent(props) {
    const sendDataToParent = () => {
        const data = "Hello from Child!!!";
        props.onDataFromChild(data); //Calling the callback function from parent
    }
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  )
}

export default ChildComponent