import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import IndexPage from './pages'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import Layout from './modules/core/layout/Layout'
import { ApolloProvider } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import initApolloClient from './apolloClient'
import { UserProvider } from './modules/auth/UserContext'
import ProductsPage from './pages/products'
import ProductPage from './pages/product'

function App() {
  // TODO: Organize the code in a way that doesn't require this
  // But the 'useToast' hook can only be called in a FC
  const toast = useToast()
  const apolloClient = initApolloClient(toast)

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <Router>
          <Layout>
            <Route path="/" exact component={ProductsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/products">
              <Redirect to="/" />
            </Route>
            <Route path="/p/:id" component={ProductPage} />
          </Layout>
        </Router>
      </UserProvider>
    </ApolloProvider>
  )
}

export default App
