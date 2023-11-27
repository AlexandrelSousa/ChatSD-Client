import React, {useRef} from 'react'
import io from 'socket.io-client'

export default function join({setChatVisibility}) {

  const userNameRef = useRef()

  const handleSubmit = () => {
    const username = userNameRef.current.value
    if(!username.trim()) return
    const socket = io.connect('http://localhost:3003')
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
