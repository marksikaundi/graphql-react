import './App.css';
import Home from './pages/Home';
import { apolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  ApolloClient
} from '@apollo/client';

function App() {
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com"
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
    
  )
}

export default App
