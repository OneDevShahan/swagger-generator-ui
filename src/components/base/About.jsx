import React from "react";
import {
  FaBolt,
  FaMagic,
  FaFileAlt,
  FaClipboard,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

const About = ({ isDarkMode }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
    <h2 className="text-4xl font-bold gradient-heading mb-6">
      About Swag Generator
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl">
      The Swagger YAML Generator is a versatile tool that streamlines API
      documentation creation by generating structured Swagger YAML files from
      user input. Built with a Spring Boot backend and a React/Tailwind CSS
      frontend, this tool allows developers to save time and ensure consistent,
      accurate documentation.
    </p>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaBolt className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Lightning-Fast Generation
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Instantly create Swagger YAML files by simply entering API endpoint
          details and selecting request/response schemas.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaMagic className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Smart Input Recognition
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Automatically formats and validates input data to ensure YAML
          structure is precise and usable across development environments.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaFileAlt className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Customizable API Schemas
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Define flexible request and response schemas that adapt to various API
          needs, supporting complex API documentation.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaClipboard className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          One-Click Copy
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Quickly copy the generated Swagger YAML file to your clipboard, ready
          for integration into documentation or development tools.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaCog className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Tailored Flexibility
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Adjust endpoint methods, headers, and authentication types to meet
          specific API documentation requirements.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FaShieldAlt className="text-green-500 text-3xl mb-2 transition-transform transform hover:scale-110 hover:text-blue-400" />
        <h3 className="text-xl font-semibold mb-2 gradient-heading">
          Security Standards
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Ensures adherence to Swagger and OpenAPI standards for security,
          compatibility, and readability across applications.
        </p>
      </div>
    </div>

    <div className="mt-12 max-w-3xl text-center">
      <h3 className="text-2xl font-bold gradient-heading mb-4">
        Built for API Developers, by Developers
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        This tool is crafted for developers who want a faster, more efficient
        way to document APIs. Whether you’re working solo or part of a team, the
        Swagger YAML Generator can save valuable time and streamline your
        documentation workflow.
      </p>
    </div>
  </div>
);

export default About;
