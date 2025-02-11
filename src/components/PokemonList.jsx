import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import { PokemonCard } from "./PokemonCard";
import styled from "styled-components";
import Swal from "sweetalert2";

const StContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1em;
  padding-top: 50px;
`;

export const PokemonList = (props) => {
  const { myPokemon, setMyPokemon } = props;

  const addPokemon = (id) => {
    if (myPokemon.length >= 6) {
      Swal.fire("포켓몬은 6마리까지만 추가 할 수 있습니다!");
      return;
    }
    if (myPokemon.some((pokemon) => pokemon.id === id)) {
      Swal.fire("이미 추가된 포켓몬입니다!");
      return;
    }

    const addedPokemon = MOCK_DATA.filter((card) => card.id === id);
    Toast.fire({
      icon: "success",
      title: "포켓몬을 선택했습니다.",
    });
    setMyPokemon((prev) => [...prev, ...addedPokemon]);
    localStorage.setItem(
      "myPokemon",
      JSON.stringify([...myPokemon, ...addedPokemon])
    );
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

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
