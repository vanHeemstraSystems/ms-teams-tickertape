import React, { useEffect, useState } from 'react'

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/messages.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setMessages(data)
      } catch (error) {
        console.error('Error fetching the messages:', error)
      }
    }

    fetchMessages()
  }, [])

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  )
}

export default Messages
