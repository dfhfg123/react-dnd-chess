import { useState } from 'react'
import React from 'react'
import Board from './Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Board></Board>
    </div>
  )
}

export default App
