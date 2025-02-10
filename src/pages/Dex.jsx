import React, { useState } from "react";
import { DashBoard } from "../components/DashBoard";
import { PokemonList } from "../components/PokemonList";

export const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  return (
    <div>
      <DashBoard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </div>
  );
};
