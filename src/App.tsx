import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './pages'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/product/:id" />
    </Router>
  )
}

export default App
