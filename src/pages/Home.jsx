import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
    return (
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn74k9jrdLZiWw0dCfb06gfj7SzsJbSBR0cQ&s"/></div>
        <button onClick={()=> {
            navigate("/dex")
        }}>포켓몬도감 시작하기</button>
    </div>
  )
}
