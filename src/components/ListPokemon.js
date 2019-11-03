import React from 'react';
import PokemonCard from './pokemon_card';

const ListPokemon =({data}) =>{
    
    return(
        <div className='listPokemon'>
                {data.map((pokemon,index) => (
                <PokemonCard
                    key={index}
                    indexPokemon={pokemon.entry_number}
                    name={pokemon.pokemon_species.name}
                />
                ))}
            
      </div>
    );
}

export default ListPokemon