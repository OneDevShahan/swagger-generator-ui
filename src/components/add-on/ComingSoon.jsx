import React from "react";
import { FaBrain, FaRobot, FaRocket, FaShieldAlt } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { FaSquareWebAwesome } from "react-icons/fa6";



const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center min-h-screen rounded bg-gray-100 dark:bg-gray-900 p-6">
    {/* Main Title with Subtle Animation */}
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 animate-pulse mb-4">
      Coming Soon
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
      Exciting new features and AI-powered enhancements are on the horizon!
    </p>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaBrain className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          AI-Enhanced YAML Generation
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Leverage AI to automatically fill in missing details and optimize API
          documentation with intelligent suggestions.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaRobot className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Automated Testing Integration
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Integrate automated testing tools to ensure your API specifications
          are verified and up-to-date effortlessly.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaRocket className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Multi-API Documentation Support
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Document multiple APIs in one place, making it easy to manage complex
          integrations across different microservices.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaSquareWebAwesome className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Enhanced User Interface and Customization
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Look forward to more customization options and an improved user
          interface for an even better experience.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaShieldAlt className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Security Compliance Checker
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Automatically analyze your API definitions for security compliance,
          suggesting improvements to enhance API protection.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <GrTemplate className="text-green-500 text-3xl mb-2 hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Custom Documentation Templates
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Create and save custom templates for different API standards, making
          it easier to document APIs in various formats.
        </p>
      </div>
    </div>
  </div>
);

export default ComingSoon;
