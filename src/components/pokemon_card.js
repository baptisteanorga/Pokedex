import React from 'react';



const PokemonCard = props => {
    const { name, indexPokemon } = props;
    return(
        <div className='cardPokemon'>
            <h2>{name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png`}></img>
            <p>{indexPokemon}</p>

        </div>
    );
};

export default PokemonCard;