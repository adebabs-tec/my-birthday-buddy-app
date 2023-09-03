// import React from 'react'
import Chats from './chat'

export default function ChatApp() {
  const chatList = Chats.map((chat) => {
    const { id, img, name, age } = chat
    return (
      <li key={id}>
        <img src={img} />
        <h1>{name}</h1>
        <h3>{age}</h3>
      </li>
    )
  })
  return <ul>{chatList}</ul>
}
