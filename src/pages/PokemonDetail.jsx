import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";

export const PokemonDetail = () => {
  const navigate = useNavigate();

  const [params] = useSearchParams();
  console.log(params);
  const pokemonId = params.get("id");

  const selectedPokemonInfo = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(pokemonId)
  );

  return (
    <div key={selectedPokemonInfo.id}>
      <div>
        <img src={selectedPokemonInfo.img_url} height={200} />
      </div>
      <div>{selectedPokemonInfo.korean_name}</div>
      <p>{selectedPokemonInfo.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};
