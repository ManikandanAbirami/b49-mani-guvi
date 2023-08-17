import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
  return (
    <div>
        <h2>Child Component!</h2>
        {/* <ol>
            {props.names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ol> */}
        <GrandChild names={props.names}/>
    </div>
  )
}

export default Child