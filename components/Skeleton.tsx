import React from 'react';

interface SkeletonProps {
  number: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ number }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: number }, (_, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <div className="relative w-full h-48 bg-gray-300 animate-pulse"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mt-2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
