import React from "react";
import styled from "styled-components";
import { PokemonCard } from "./PokemonCard";

const StDashboardBox = styled.div`
  background-color: wheat;
  height: 30vh;
  width: 100%;
  margin-top: 0px;
`;
const StBox = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background-color: skyblue;
  background-image: url("https://i.pinimg.com/originals/f5/54/89/f5548916ca86b30f7b8f418e4c5c6794.png");
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
`;
const StBoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const DashBoard = (props) => {
  const { myPokemon, setMyPokemon } = props;
  let emptyArr = Array(6).fill(0);

  let newArr = emptyArr?.map((e, i) => {
    return myPokemon[i] || 0;
  });

  const removePokemon = (id) => {
    // Toast.fire({
    //   icon: "success",
    //   title: "포켓몬을 풀어주었습니다.",
    // });
    const removePokemon = myPokemon.filter((card) => card.id !== id);
    setMyPokemon(removePokemon);
    localStorage.setItem("myPokemon", JSON.stringify(removePokemon));
  };

  return (
    <StDashboardBox>
      <h2>나만의 포켓몬</h2>
      <StBoxContainer>
        {newArr?.map((card) =>
          card === 0 ? (
            <StBox />
          ) : (
            <PokemonCard
              key={card.id}
              card={card}
              text="삭제"
              removePokemon={removePokemon}
            />
          )
        )}
      </StBoxContainer>
    </StDashboardBox>
  );
};
