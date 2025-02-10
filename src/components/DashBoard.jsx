import React from 'react'
import styled from 'styled-components';
const StDashboardBox = styled.div`
    background-color:green;
    height:30vh;
    margin-top:10px;
`
const StBox = styled.div`
width:100px;
height:100px;
margin-top:10px;
background-color: skyblue;
display:flex;

`
const StBoxContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
    `

export const DashBoard = (props) => {
    const {myPokemon, setMyPokemon} = props;
    let emptyArr = Array(6).fill(0);

     let newArr = emptyArr?.map((e, i) => {
         return myPokemon[i] || 0;
    })

    return (
    <StDashboardBox>
        <h2>나만의 포켓몬</h2>
        <StBoxContainer>

        {newArr?.map((card)=> card === 0 ? <StBox/> : null)
            
        }
        </StBoxContainer>
        
    </StDashboardBox>
  )
}
