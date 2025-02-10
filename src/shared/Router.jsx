import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dex } from '../pages/Dex'

const Router = () => {
  return (
    <>
    {/* 경로설정 */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dex" element={<Dex />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router