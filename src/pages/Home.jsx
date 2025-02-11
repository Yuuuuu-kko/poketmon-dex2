import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StBackImg = styled.div`
  background-image: url("https://static1.srcdn.com/wordpress/wp-content/uploads/landscape-1456483171-pokemon2.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5");
  height: 100vh;
  width: 100vw;
  background-position: center; //배경이미지 센터 배치
  background-size: cover; //배경이미지 좌우 꽉차 보이게 함
  background-attachment: fixed;
`;

export const Home = () => {
  const navigate = useNavigate();
  return (
    <StBackImg>
      <div>
        <div>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn74k9jrdLZiWw0dCfb06gfj7SzsJbSBR0cQ&s" /> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
            width={600}
          />
        </div>
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬도감 시작하기
        </button>
      </div>
    </StBackImg>
  );
};
