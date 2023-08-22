import React, {useContext} from 'react'
import { AnimalContext } from './AnimalContext'

function AnimalSound() {
    const {animalSound} = useContext(AnimalContext);
    const {age} = useContext(AnimalContext);
  return (
    <div>
    <div>The Animal Sound is: {animalSound}</div>
    
    <p>Age is: {age}</p>
    </div>
  )
}

export default AnimalSound