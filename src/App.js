import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Pokedex from './pages/pokedex';


class App extends Component{
  render(){
    return(
      <div className= 'App'>
        <BrowserRouter>
          <Switch>
            <Pokedex/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

  

export default App;