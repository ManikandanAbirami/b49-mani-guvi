import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Tic Tac Toe Game</h1>
     <TicTacToe/>
    </>
  )
}

export default App
