import React from 'react'
import MOCK_DATA from '../data/MOCK_DATA'
import { PokemonCard } from './pokemonCard'
export const PokemonList = (props) => {
    const {myPokemon, setMyPokemon} = props;
    

    const addPokemon = (id) => {

        const addedPokemon = MOCK_DATA.filter((card) => card.id === id);
        setMyPokemon((prev)=> [...prev, ...addedPokemon]);
    }

  return (
    <>
        {MOCK_DATA.map((card)=> {
          return <PokemonCard key={card.id} card={card} addPokemon ={addPokemon} text="추가" />  
        })}
    </>

  )
}
