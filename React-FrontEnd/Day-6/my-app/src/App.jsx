import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* <label htmlFor='name'>Name:</label>
        <input type='text' id="name"></input> */}
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
