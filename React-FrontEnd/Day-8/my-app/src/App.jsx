import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimalProvider } from './AnimalContext'
import AnimalSound from './AnimalSound'
import ChangeSoundButton from './ChangeSoundButton'

function App() {
  return (
    <AnimalProvider>
      <div>
        <h1>Animal Sounds App</h1>
        <AnimalSound/>
        <ChangeSoundButton/>
      </div>
    </AnimalProvider>
  )
}

export default App
