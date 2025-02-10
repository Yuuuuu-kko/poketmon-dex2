import React from 'react'

export const PokemonCard = ({card, text, addPokemon}) => {

  return (
    <div>
        <img src={card.img_url} alt="" />
        <div>{card.korean_name}</div>
        <div>{card.id}</div>
        <button onClick={(e)=>{
            e.stopPropagation();
            return addPokemon(card.id);
        }}>{text}</button>
    </div>

  )
}
