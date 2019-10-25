import React, { Component } from 'react';

import './App.css';
import Appartements from './pages/appartements';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Lorem from './pages/lorem';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apparts">Appartements</Link>
            </li>
            <li>
              <Link to="/lorem">Lorem</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/apparts">
            <Appartements/>
          </Route>
          <Route path="/lorem">
            
            <Lorem/>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

  

export default App;