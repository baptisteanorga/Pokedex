import React from 'react';
import logo from '../logo.svg';

import Item from '../components/titre.js';
import List from '../components/list';
import Clock from '../container/clock';
import Form from '../components/form';
import data from '../data.json';


class Appartements extends React.Component{
    state = {
        value: '',
    };
    
    handleSubmit = this.handleSubmit.bind(this)
    
    handleSubmit(ev){
        ev.preventDefault();
        this.setState({
            value: new FormData(ev.currentTarget).get('filter'),
        });
      }

    render(){
        const filteredApparts = data.appartements.filter(appartements=>
            appartements.titre.toLowerCase().includes(this.state.value.toLowerCase()),
            )
      
            return(
            
                <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <Item/>
                  <Form handleSubmit={this.handleSubmit} value={this.state.value} />
                  <List data={filteredApparts} />
                  <Clock/>
                  <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Learn React
                  </a>
                </header>
              </div>
            );
    }
}

export default Appartements