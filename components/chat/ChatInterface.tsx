"use client"
import React, { useState, useRef, useEffect } from 'react'
import AgentConfigForm from './AgentConfigForm'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { FormData } from '@/utils/schema/createAgentSchema'
import { createAgent, createGoals } from '@/api'
import LoadingScreen from './LoadingScreen'


interface Message {
  sender: 'user' | 'ai'
  text: string
}

const ChatInterface: React.FC = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([]) 
  const [questions, setQuestions] = useState<string[]>([]) 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([]) 
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      setMessages((prev) => [...prev, { sender: 'ai', text: questions[currentQuestionIndex] }]);
    }
  }, [currentQuestionIndex]); 
  


  const handleSend = () => {
    if (input.trim() === '' || currentQuestionIndex >= questions.length) return;
  
    const currentInput = input;
  
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: currentInput },
    ]);
    setAnswers((prev) => [...prev, currentInput]);
    setInput('');
  
    if (currentQuestionIndex === questions.length - 1) {
      handleBatchSubmission([...answers, currentInput]);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };


 const handleBatchSubmission = async (currentAnswers: string[]) => {
  try {
    console.log('Submitting answers:', currentAnswers);
    setAnswers([]);
    
    const response = await createAgent({ answers: currentAnswers }, 1);

    const newQuestions = response.questions || [];
    if (newQuestions.length > 0) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Thank you for answering these questions! Let\'s move on to the next set.' },
      ]);
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
    } else {
      console.log('All questions answered, creating goals...');
      try {
        setLoading(true);
        const goalsResponse = await createGoals();
        console.log(goalsResponse);
        setMessages((prev) => [
          ...prev,
          { sender: 'ai', text: 'All questions answered! Your agent is being created.' },
        ]);
        setLoading(false)
      } catch (error) {
        console.error('Error creating goals:', error);
        setMessages((prev) => [
          ...prev,
          { sender: 'ai', text: 'An error occurred while creating your agent. Please try again later.' },
        ]);
      }
    }
  } catch (error) {
    console.error('Error submitting answers:', error);
    setLoading(false)
    setMessages((prev) => [
      ...prev,
      { sender: 'ai', text: 'Something went wrong. Please try again later.' },
    ]);
  }
};

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      localStorage.setItem("role", data.role)
      const response = await createAgent(data, -1) 
      console.log('Agent created successfully:', response)

      const receivedQuestions = response.questions || []
      setQuestions(receivedQuestions)

      if (receivedQuestions.length > 0) {
        setMessages([{ sender: 'ai', text: receivedQuestions[0] }])
        setCurrentQuestionIndex(0)
      }
      setShowChat(true)
      setIsSubmitting(false)
    } catch (error) {
      setIsSubmitting(false)
      console.error('Error creating agent:', error)
    }
  }

  if (!showChat) {
    return <AgentConfigForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
  }

  if (loading) {
    return <LoadingScreen/>
  }

  return (
    <div className="max-w-3xl mx-auto h-[calc(90vh-80px)] shadow-md border mt-8 rounded-lg w-full flex flex-col relative">
      {/* Chat messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
        {loading && (
          <div className="text-[10px] text-gray-500">AI is typing...</div>
        )}
      </div>

      {/* Chat input */}
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  )
}

export default ChatInterface

