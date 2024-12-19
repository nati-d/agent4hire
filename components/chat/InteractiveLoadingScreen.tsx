'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const stages = [
  "Initializing agent...",
  "Analyzing input...",
  "Generating personality...",
  "Creating knowledge base...",
  "Establishing communication protocols...",
  "Finalizing agent setup..."
]

const InteractiveLoadingScreen: React.FC<{ isCreatingGoals?: boolean }> = ({ isCreatingGoals = false }) => {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prevStage) => (prevStage + 1) % stages.length)
      setProgress((prevProgress) => Math.min(prevProgress + 16.67, 100))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const spinnerVariants = {
    start: { rotate: 0 },
    end: { rotate: 360, transition: { duration: 1, repeat: Infinity, ease: "linear" } }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <motion.div
          className="w-16 h-16 border-t-4 border-blue-500 rounded-full mx-auto mb-4"
          variants={spinnerVariants}
          initial="start"
          animate="end"
        />
        <h2 className="text-2xl font-bold text-center mb-4">
          {isCreatingGoals ? "Creating Agent Goals" : "Creating Your AI Agent"}
        </h2>
        <motion.div
          className="h-2 bg-blue-500 rounded-full mb-4"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        <p className="text-center text-gray-600 mb-2">{stages[currentStage]}</p>
        {isCreatingGoals && (
          <p className="text-sm text-center text-gray-500 mt-4">
            This process may take a minute. We're carefully crafting goals tailored to your agent's purpose.
          </p>
        )}
      </div>
    </div>
  )
}

export default InteractiveLoadingScreen

