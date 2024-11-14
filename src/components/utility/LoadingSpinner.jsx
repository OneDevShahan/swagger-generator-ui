import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-blue-500 text-lg">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;