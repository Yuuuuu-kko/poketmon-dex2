import React from "react";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ card, text, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const handleCardDetail = (id) => {
    navigate(`/dex/detail?id=${id}`);
  };

  return (
    <div onClick={() => handleCardDetail(card.id)}>
      <img src={card.img_url} alt="" />
      <div>{card.korean_name}</div>
      <div>{card.id}</div>
      {text === "추가" ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            return addPokemon(card.id);
          }}
        >
          {text}
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            return removePokemon(card.id);
          }}
        >
          {text}
        </button>
      )}
    </div>
  );
};
