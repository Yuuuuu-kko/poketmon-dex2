import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import { PokemonCard } from "./PokemonCard";
import styled from "styled-components";

const StContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1em;
  padding-top: 50px;
`;

export const PokemonList = (props) => {
  const { myPokemon, setMyPokemon } = props;

  const addPokemon = (id) => {
    const addedPokemon = MOCK_DATA.filter((card) => card.id === id);
    setMyPokemon((prev) => [...prev, ...addedPokemon]);
  };

  return (
    <StContainer>
      {MOCK_DATA.map((card) => {
        return (
          <PokemonCard
            key={card.id}
            card={card}
            addPokemon={addPokemon}
            text="추가"
          />
        );
      })}
    </StContainer>
  );
};
