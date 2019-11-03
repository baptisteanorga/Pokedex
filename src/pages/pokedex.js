import React from 'react';
import Form from '../components/form';
import ListPokemon from '../components/ListPokemon';
import TopBar from '../components/TopBar';

class Pokedex extends React.Component {
    state = {
        pokemon:[],
        value: '',
    };
    handleSubmit = this.handleSubmit.bind(this)
      
        
    async componentDidMount() {
        this.setState({isLoading:true})
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`);
            const json = await response.json();
            this.setState({pokemon:json.pokemon_entries})

        } catch (err){
            console.log(err.msg);
            // this.setState({isLoading:false})
            throw err
        }
    }

    handleSubmit(ev){
      ev.preventDefault();
      this.setState({
          value: new FormData(ev.currentTarget).get('filter'),
      });
    }
  
    render() {
      
      const filteredPokemon = this.state.pokemon.filter(pokemon=>
        pokemon.pokemon_species.name.toLowerCase().includes(this.state.value.toLowerCase()),
        )

        return (
          <>
            <TopBar/>
            <Form handleSubmit={this.handleSubmit} value={this.state.value} />
            
            <ListPokemon data={filteredPokemon}/>
          </>
        );
      }
    }
  

export default Pokedex