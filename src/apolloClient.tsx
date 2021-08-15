import { ApolloClient, HttpLink, from, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { useToast } from '@chakra-ui/toast'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API_URI, credentials: 'include' })

type useToastHook = ReturnType<typeof useToast>
const createErrorLink = (toast: useToastHook): ApolloLink =>
  onError(({ graphQLErrors, networkError, operation }) => {
    const context = operation.getContext()
    if (context.skipOnError) return

    if (graphQLErrors)
      graphQLErrors.forEach(({ message }) => toast({ status: 'error', title: 'Error', description: message }))

    if (networkError) toast({ title: 'Network error', status: 'error', description: networkError })
  })

const initApolloClient = (toast: useToastHook) =>
  new ApolloClient({
    link: from([createErrorLink(toast), httpLink]),
    cache: new InMemoryCache(),
  })

export default initApolloClient
