import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Signup from './components/Signup/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    
      <ApolloProvider client={client}>
        <Router> 
          <Header />
            <div className = "container" >
              <Routes>
                <Route path="/" exact element={<Home></Home>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="*" element={<NoMatch />} 
            />
              </Routes>
            </div>
        </Router>
      </ApolloProvider> 
  );
}

export default App;
