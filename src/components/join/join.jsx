import React, {useRef} from 'react'
import io from 'socket.io-client'

export default function join({setChatVisibility, setSocket}) {

  const userNameRef = useRef()

  const handleSubmit = async () => {
    const username = userNameRef.current.value
    if(!username.trim()) return
    const socket = await io.connect('http://localhost:3003')
    socket.emit('setUserName', username)
    setSocket(socket)
    setChatVisibility(true)
  }

  return (
    <div>
        <h1>Join</h1>
        <input type="text" ref={userNameRef} placeholder='Nome de Usuário'/>
        <button onClick={()=>handleSubmit()}>Entrar</button>
    </div>
  )
}

// Parei no minuto 24:46