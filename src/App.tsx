import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './pages'

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage}></Route>
      <Route path="/product/:id"></Route>
    </Router>
  )
}

export default App
