import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="pt-16 p-4">
        <h2 className="text-gray-900 dark:text-white">Welcome to the React Template Project</h2>
        <p className="text-gray-600 dark:text-red-500">Toggle the button in the header to switch modes.</p>
      </main>
    </div>
  );
}

export default App;
