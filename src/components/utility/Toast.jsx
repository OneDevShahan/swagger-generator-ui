import React, { useEffect, useState } from "react";

const Toast = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;
    const duration = 2000; // 3 seconds

    if (message) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            onClose();
            return 0;
          }
          return prev - 100 / (duration / 100);
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [message, onClose]);

  return (
    message && (
      <div
        className={`fixed top-5 right-5 max-w-xs px-4 py-3 rounded-lg shadow-md text-white 
          ${type === "success" ? "bg-green-500" : "bg-red-500"}
        `}
      >
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button className="ml-4 text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <div
          className="h-1 mt-2 rounded-full bg-opacity-20"
          style={{
            backgroundColor: type === "success" ? "green" : "red",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: type === "success" ? "#34D399" : "#F87171",
            }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Toast;