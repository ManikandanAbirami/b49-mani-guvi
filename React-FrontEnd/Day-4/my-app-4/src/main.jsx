import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Post from './Post.jsx'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <div id="main">
    <Post name="Post 1" age="21" flag="true"/>
    <Post name="Post 2" age="22" flag="false"/>
    <Post name="Post 3" age="23" flag="true"/>
    <Post name="Post 4" age="24" flag="false"/>
    <Post name="Post 5" age="25" flag="true"/>
    </div>
  </React.StrictMode>,
)
