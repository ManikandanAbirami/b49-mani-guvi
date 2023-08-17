import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import ParentComponent from './ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentComponent/>
    </>
  )
}

export default App
