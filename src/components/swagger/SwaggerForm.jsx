import React, { useState } from "react";
import { FaClipboard, FaEraser, FaMagic } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const SchemaForm = ({
  onSubmit,
  onClear,
  isLoading,
  swaggerData,
  copyToClipboard,
  isDarkMode,
  showToast,
}) => {
  const [requestBody, setRequestBody] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // This should prevent the form from submitting by default
    setIsGenerating(true);
    try {
      // Delay for animation effect
      await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5s delay
      const parsedData = JSON.parse(requestBody); // Validate JSON
      await onSubmit(parsedData); // Call parent onSubmit

      // Validate that it's an array and contains objects with necessary fields
      if (
        !Array.isArray(parsedData) ||
        parsedData.some(
          (item) =>
            !item.endpoint ||
            !item.httpMethod ||
            !item.requestSchema ||
            !item.responseSchema
        )
      ) {
        showToast(
          "Each item should have 'endpoint', 'httpMethod', 'requestSchema', and 'responseSchema' fields.",
          "error"
        );
        return;
      }
      // If valid, pass the parsed data to the parent onSubmit function
      await onSubmit(parsedData);
    } catch (error) {
      showToast(
        "Invalid JSON format. Please make sure it's a properly formatted JSON array.",
        "error"
      );
      return;
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearClick = () => {
    setIsClearing(true);
    setTimeout(() => {
      onClear();
      setRequestBody("");
      setIsClearing(false);
    }, 300); // Delay to show animation
  };

  const handleCopyClick = async (e) => {
    e.preventDefault(); // Prevent form submission
    setIsCopying(true);
    copyToClipboard();
    setTimeout(() => setIsCopying(false), 300); // Delay to show animation
  };

  // JSON Formatter Function
  const formatJSON = () => {
    try {
      const parsed = JSON.parse(requestBody);
      const formatted = JSON.stringify(parsed, null, 2); // Beautify with indentation of 2 spaces
      setRequestBody(formatted);
    } catch (error) {
      showToast("Invalid JSON. Please check your input.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">
        Enter Endpoint Details (as JSON Array)
      </h2>
      <div className="relative mb-4">
        <textarea
          placeholder='[{"endpoint": "/example", "httpMethod": "GET", "requestSchema": {"type": "object"}, "responseSchema": {"type": "object"}}]'
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          className={`w-full p-2 border rounded-lg text-sm mb-4 ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          rows="12"
        />

        {/* Beautification Icon */}
        <button
          type="button"
          onClick={formatJSON}
          className={`absolute top-3 right-8 ${
            isDarkMode
              ? "bg-gray-700 text-white hover:text-yellow-300 focus:outline-none"
              : "bg-white text-black hover:text-green-500"
          }`}
          title="Beautify JSON"
        >
          <FaMagic size={20} />
        </button>
      </div>

      <div className="flex space-x-4">
        {/* Generate Swagger Button with Rotation Animation */}
        <button
          type="submit"
          className={`
      ${isDarkMode ? "bg-blue-600" : "bg-blue-500"} 
      text-white p-2 rounded  flex items-center
      ${!requestBody ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}
    `}
          disabled={!requestBody || isLoading} // Disable if requestBody is empty or during loading
          title="Swag Generate"
        >
          {/* Generate Swagger Icon */}
          {isGenerating ? (
            <FaGear className="animate-spin mr-2" size={18} /> // Tailwind spin class
          ) : (
            <FaGear className="mr-2" size={18} />
          )}
          {isGenerating ? "Generating..." : "Swagger"}
        </button>

        {/* Clear Button with Bounce Animation */}
        <button
          type="button"
          onClick={handleClearClick}
          className={`text-white p-2 rounded  flex items-center
      ${isDarkMode ? "bg-gray-600" : "bg-gray-500"} 
      ${
        !requestBody
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-700 font-normal"
      }
      ${isClearing ? "animate-bounce" : ""}
    `}
          disabled={!requestBody} // Disable if requestBody is empty
          title="Clear input"
        >
          <FaEraser className="mr-2" /> {/* Clear Icon */}
          Clear
        </button>

        {/* Copy to Clipboard Button with Pulse Animation */}
        <button
          onClick={handleCopyClick}
          className={`text-white p-2 rounded  flex items-center
      ${isDarkMode ? "bg-green-600" : "bg-green-500"} 
      ${!swaggerData ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"}
      ${
        isCopying
          ? "transform scale-110 transition duration-900 ease-in-out opacity-75"
          : ""
      }`}
          disabled={!swaggerData} // Disable if swaggerData is not yet generated
          title="Copy YAML to clipboard"
        >
          <FaClipboard className="mr-2" /> {/* Copy to Clipboard Icon */}
          Copy YAML to Clipboard
        </button>
      </div>
    </form>
  );
};

export default SchemaForm;