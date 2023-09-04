// import React from 'react'
import { useState } from 'react'
import Chats from './chat'

export default function ChatApp() {
  const [chats, setChats] = useState(Chats)
  const chatList = chats.map((chat) => {
    const { id, img, name, age } = chat
    return (
      <>
        <li key={id}>
          <img src={img} />
          <div className="user-details">
            <h1>{name}</h1>
            <h3>{age}</h3>
          </div>
        </li>
      </>
    )
  })
  return (
    <ul>
      <h3>{chats.length} Birthday Today</h3>
      {chatList}
      <button
        className="btn"
        onClick={() => {
          setChats([])
        }}
      >
        Clear All
      </button>
    </ul>
  )
}
