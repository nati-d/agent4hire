'use client'

import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="relative w-32 h-32">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{
              animation: `spin${index + 1} 3s infinite ease-in-out`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div
              className="w-16 h-16 gradient rounded-lg shadow-lg"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes spin1 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }
        @keyframes spin2 {
          0%, 100% { transform: rotate(90deg); }
          50% { transform: rotate(270deg); }
        }
        @keyframes spin3 {
          0%, 100% { transform: rotate(180deg); }
          50% { transform: rotate(360deg); }
        }
        @keyframes spin4 {
          0%, 100% { transform: rotate(270deg); }
          50% { transform: rotate(450deg); }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen

