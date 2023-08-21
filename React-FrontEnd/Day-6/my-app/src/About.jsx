import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const { name } = useParams();
  return (
    <div><h1>About</h1>
    <h2>Welcome {name}!!!!!</h2>
    </div>
  )
}

export default About