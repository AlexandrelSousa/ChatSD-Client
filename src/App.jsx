import { useState } from 'react'
import Join from './components/join/join'
import Chat  from './components/chat/chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <>
      {
        chatVisibility ? <Chat/> : <Join setChatVisibility={setChatVisibility}/>
      }
    </>
  )
}

export default App
