import { useState } from 'react'
import './App.css'
import Router from './shared/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router/>
    </>
  )
}

export default App
