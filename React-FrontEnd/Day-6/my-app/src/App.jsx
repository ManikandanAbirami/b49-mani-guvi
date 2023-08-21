import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Diet from './Diet'

function App() {

  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
              <Link to="/diet/lowCarb">Low Carb</Link>
            </li>
            <li>
              <Link to="/about/Manikandan">About </Link>
              <Link to="/diet/highProtein">High Protein</Link>
            </li>
            <li>
              {/* <Link to="/contact">Contact</Link> */}
              <Link to="/diet/lowFat">Low Fat</Link>
            </li>
          </ul>
        </nav>
        {/* <label htmlFor='name'>Name:</label>
        <input type='text' id="name"></input> */}
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about/:name" Component={About}></Route>
          {/* <Route path="/contact" Component={Contact}></Route> */}
          <Route path="/diet/:dietName" Component={Diet}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
