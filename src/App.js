import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PokemonDetail from './PokemonDetail';
import CardContainer from './CardContainer';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Parallax } from 'react-parallax';

function App() {

  const [search, setSearch] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Navbar value={search} onChange={updateSearch} />
        <Switch>
          <Route path="/" exact component={CardContainer} />
          <Route path="/pokemon/:id" component={PokemonDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
