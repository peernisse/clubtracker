import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './components/Course.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="title-main">Clubtracker</h1>
        <p className="subtitle-main">Know your game</p>
        <Course />

      </div>
      
    </>
  )
}

export default App
