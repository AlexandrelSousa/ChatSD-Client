import { useState } from 'react'
import Join from './components/join/join'
import Chat  from './components/chat/chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <>
      {
        chatVisibility ? <Chat socket={socket}/> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility}/>
      }
    </>
  )
}

export default App
