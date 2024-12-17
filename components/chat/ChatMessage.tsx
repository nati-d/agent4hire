import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface ChatMessageProps {
  sender: 'user' | 'ai'
  text: string
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => {
  return (
    <div
      className={`flex items-start gap-3 ${
        sender === 'user' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <Avatar className="w-8 h-8">
        <AvatarImage src={sender === 'user' ? "/user-avatar.png" : "https://cdn.builder.io/api/v1/image/assets/TEMP/bd86c547312079719a28691b43200bb4ebdc52ccb3a021471e46f5f8357119e1?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad"} />
        <AvatarFallback>{sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
      </Avatar>
      <div
        className={`rounded-lg p-3 text-[12px] max-w-[70%] ${
          sender === 'user'
            ? 'bg-transparent text-black'
            : 'bg-transparent text-black'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default ChatMessage

