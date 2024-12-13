import React from 'react';

const AgentSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-gray-200 rounded"></div>
        ))}
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  );
};

export default AgentSkeleton;

