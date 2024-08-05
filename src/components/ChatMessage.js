import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img className="h-8" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajVijyoJgMl3Gpyve3xw1osi4bljAFkRVaQ&s" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
