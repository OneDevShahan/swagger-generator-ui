import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/base/About";
import Header from "./components/base/Header";
import NoPage from "./components/base/NoPage";
import SwaggerGenerator from "./components/swagger/SwaggerGenerator";
import Toast from "./components/utility/Toast";
import Footer from "./components/base/Footer";
import ComingSoon from "./components/add-on/ComingSoon";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast({ message: "", type: "" });
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const systemPrefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialDarkMode =
      savedDarkMode === "true" ||
      (savedDarkMode === null && systemPrefersDarkMode);

    setIsDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (savedDarkMode === null) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Router basename="/swagger-generator-ui">
      <div
        className={`bg-gray-100 dark:bg-gray-900 min-h-screen ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <SwaggerGenerator
                  isDarkMode={isDarkMode}
                  showToast={showToast}
                />
              }
            />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route
              path="/coming-soon"
              element={<ComingSoon isDarkMode={isDarkMode} />}
            />
            <Route path="*" element={<NoPage isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        {/* Render Toast component */}
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={hideToast}
          />
        )}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;