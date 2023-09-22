import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
          <h1>MERN Stack JWT Authentication!</h1>
          {token && <button onClick={logout}>Logout</button>}
        </header>
        <main>
          <Routes>
          <Route path="/" Component={Register}></Route>
          <Route path="/login" element={<Login setToken={setToken}></Login>}></Route>
          <Route path="/home" element={token ? <Home/> : <Navigate to='/login'></Navigate>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
