import React, {useRef, useState, useEffect} from 'react'

export default function chat({socket}) {

  const messageRef = useRef()
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket.on('receive_Message', data =>{
      setMessageList((current) => [...current, data])
    })

    return () => {socket.off('receive_Message')}
  }, [socket])

  const handleSubmit = () => {
    const message = messageRef.current.value
    if(!message.trim()) return

    socket.emit('message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }
  
  return (
    <div>
        <h1>Chat</h1>
        {
          messageList.map((message, index) => (
            <p key={index}>{message.author} : {message.text}</p>
          ))
        }
        <input type="text" ref={messageRef} placeholder='Nome de Usuário'/>
        <button onClick={()=>handleSubmit()}>Enviar</button>
    </div>
  )
}
