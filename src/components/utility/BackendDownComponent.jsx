import React from "react";

const BackendDownComponent = ({ isBackendDown, message, isDarkMode }) => {
  if (!isBackendDown) {
    return null; // Only show when backend is down
  }

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col justify-center items-center text-center py-12 px-6`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } p-8 rounded-lg shadow-lg max-w-md w-full`}
      >
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } text-3xl font-bold mb-4`}
        >
          {message.title}
        </h2>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } text-lg mb-6`}
        >
          {message.description}
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => window.location.reload()}
            className={`${
              isDarkMode
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-full transition`}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackendDownComponent;
