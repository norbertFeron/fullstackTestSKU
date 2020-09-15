import React from 'react';
import { NavBar } from './components/navbar';
import { SecondNavBar } from './components/second-navbar';
import { SearchBar } from './components/search-bar';
import { ProductList } from './components/product-list';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Container>
          <NavBar/>
        </Container>
      </div>
      <div className="header">
        <Container>
          <SecondNavBar/>
        </Container>
      </div>
      <SearchBar />
      <ProductList/>
    </div>
  );
}

export default App;
