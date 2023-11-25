import { useState } from 'react'
import Join from './components/join/join'
import Chat  from './components/chat/chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Join/>
      <Chat/>
    </>
  )
}

export default App
