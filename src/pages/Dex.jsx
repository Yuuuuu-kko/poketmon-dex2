import React, { useState } from "react";
import { DashBoard } from "../components/DashBoard";
import { PokemonList } from "../components/PokemonList";
import styled from "styled-components";

const StDexCon = styled.div`
  width: 100%;
`;

export const Dex = () => {
  const [myPokemon, setMyPokemon] = useState(
    JSON.parse(localStorage.getItem("myPokemon")) || []
  );
  return (
    <StDexCon>
      <DashBoard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </StDexCon>
  );
};
