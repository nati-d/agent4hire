'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  { title: "Initializing", description: "Setting up the agent's core systems" },
  { title: "Analyzing", description: "Processing input and context" },
  { title: "Generating", description: "Creating agent personality and knowledge base" },
  { title: "Finalizing", description: "Establishing communication protocols" },
  { title: "Creating Goals", description: "Defining objectives and strategies" }
]

interface EnhancedLoadingScreenProps {
  isCreatingGoals: boolean
}

const EnhancedLoadingScreen: React.FC<EnhancedLoadingScreenProps> = ({ isCreatingGoals }) => {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % (isCreatingGoals ? steps.length : steps.length - 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [isCreatingGoals])

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          {isCreatingGoals ? "Creating Agent Goals" : "Creating Your AI Agent"}
        </h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <AnimatePresence key={step.title}>
              {index <= currentStep && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === currentStep ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {index < currentStep ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">{step.title}</h3>
                    <p className="text-sm text-blue-600">{step.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <div className="mt-8 relative">
          <motion.div
            className="h-2 bg-blue-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 15, ease: "linear" }}
          >
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 15, ease: "linear" }}
            />
          </motion.div>
          <UniqueSpinner />
        </div>
      </div>
    </div>
  )
}

const UniqueSpinner: React.FC = () => {
  return (
    <motion.div
      className="absolute -top-6 -right-6"
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="#2563EB" strokeWidth="4" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25" stroke="#2563EB" strokeWidth="4" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="-360 25 25"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </motion.div>
  )
}

export default EnhancedLoadingScreen

