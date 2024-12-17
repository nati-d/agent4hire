"use client"
import React, { useState, useRef, useEffect } from 'react'
import AgentConfigForm from './AgentConfigForm'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { FormData } from '@/utils/schema/createAgentSchema'

interface Message {
  sender: 'user' | 'ai'
  text: string
}

const ChatInterface: React.FC = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'What are the most common questions your customers ask?' },
    { sender: 'user', text: 'Order tracking and shipping status.' },
    { sender: 'ai', text: 'Do you want the agent to handle returns, refunds, or order tracking?' },
    { sender: 'user', text: 'Yes, all three.' },
    { sender: 'ai', text: 'What tone or personality should the agent have?' },
    { sender: 'user', text: 'Friendly and conversational.' },
  ])

  const [input, setInput] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // Handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input.trim() }])
      setInput('')
      // Simulate an AI response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'ai', text: 'Thanks for sharing! Let me know if you need more help.' },
        ])
      }, 1000)
    }
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    setShowChat(true)
  }

  if (!showChat) {
    return <AgentConfigForm onSubmit={onSubmit} />
  }

  return (
    <div className="max-w-3xl mx-auto h-[calc(90vh-80px)] shadow-md border mt-8 rounded-lg w-full flex flex-col relative">
      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 pb-20"
        ref={chatContainerRef}
      >
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Input Area */}
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  )
}

export default ChatInterface

