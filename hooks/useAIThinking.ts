import { useState, useCallback } from 'react'

const useAiThinking = () => {
  const [isAiThinking, setIsAiThinking] = useState(false)

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const simulateAiThinking = useCallback(async (duration: number = 1000) => {
    setIsAiThinking(true)
    await sleep(duration)
    setIsAiThinking(false)
  }, [])

  return { isAiThinking, simulateAiThinking }
}

export default useAiThinking

