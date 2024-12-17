import React from 'react'
import { Input } from '../ui/input'
import { Sparkles, Send } from 'lucide-react'

interface ChatInputProps {
  input: string
  setInput: (value: string) => void
  handleSend: () => void
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend }) => {
  return (
    <div className="absolute bottom-5 left-0 right-0 px-4 bg-white mx-4 border border-primary rounded-full bg-white">
      <div className="max-w-3xl mx-auto w-full px-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-primary" />
        <Input
          placeholder="Answer for agent Builder questions"
          className="flex-1 text-[12px] outline-none focus:ring-0 focus:outline-none border-none text-black placeholder:text-[12px] focus:border-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <div className="text-[12px] text-muted-foreground flex items-center gap-2">
          {input.length}/2000
        </div>
        <Send
          className="w-4 h-4 text-primary cursor-pointer"
          onClick={handleSend}
        />
      </div>
    </div>
  )
}

export default ChatInput
