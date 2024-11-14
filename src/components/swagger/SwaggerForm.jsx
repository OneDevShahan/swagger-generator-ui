import React, { useState } from "react";
import {
  FaClipboard,
  FaCloudDownloadAlt,
  FaEraser,
  FaMagic,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { dummyData } from "../utility/Constants";
import { LuFileJson2 } from "react-icons/lu";

const SchemaForm = ({
  onSubmit,
  onClear,
  isLoading,
  swaggerData,
  copyToClipboard,
  handleDownload,
  isDarkMode,
  showToast,
}) => {
  const [requestBody, setRequestBody] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for animation effect
      const parsedData = JSON.parse(requestBody); // Validate JSON

      // Validation
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

      await onSubmit(parsedData);
    } catch (error) {
      showToast(
        "Invalid JSON format. Please ensure it's correctly formatted.",
        "error"
      );
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
    }, 300);
  };

  const handleCopyClick = async (e) => {
    e.preventDefault();
    setIsCopying(true);
    copyToClipboard();
    setTimeout(() => setIsCopying(false), 300);
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(requestBody);
      setRequestBody(JSON.stringify(parsed, null, 2));
    } catch (error) {
      showToast("Invalid JSON. Please check your input.", "error");
    }
  };

  const populateDummyData = () => {
    setRequestBody(dummyData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full overflow-hidden p-4">
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
          rows="8"
        />
        <button
          type="button"
          onClick={formatJSON}
          className={`absolute top-3 right-8 ${
            isDarkMode
              ? "bg-gray-700 text-white hover:text-yellow-300"
              : "bg-white text-black hover:text-green-500"
          }`}
          title="Beautify JSON"
        >
          <FaMagic size={20} />
        </button>
      </div>

      <div className="flex flex-wrap space-x-2 space-y-2 sm:space-y-0">
        {/* Populate Dummy Data Button */}
        <button
          type="button"
          onClick={populateDummyData}
          className={`flex items-center text-white p-2 rounded ${
            isDarkMode ? "bg-purple-600" : "bg-purple-500"
          } hover:bg-purple-700`}
          title="Populate Dummy Data"
        >
          <LuFileJson2 className="mr-2" />
          Use Dummy
        </button>

        <button
          type="submit"
          className={`flex items-center text-white p-2 rounded ${
            isDarkMode ? "bg-blue-600" : "bg-blue-500"
          } ${
            !requestBody ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          disabled={!requestBody || isLoading}
          title="Swag Generate"
        >
          {isGenerating ? (
            <FaGear className="animate-spin mr-2" size={18} />
          ) : (
            <FaGear className="mr-2" size={18} />
          )}
          {isGenerating ? "Generating..." : "Swagger"}
        </button>

        <button
          type="button"
          onClick={handleClearClick}
          className={`flex items-center text-white p-2 rounded ${
            isDarkMode ? "bg-red-600" : "bg-red-500"
          } ${
            !requestBody ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
          }`}
          disabled={!requestBody}
          title="Clear input"
        >
          <FaEraser className="mr-2" />
          {isClearing ? "Clearing..." : "Clear"}
        </button>

        <button
          onClick={handleCopyClick}
          className={`flex items-center text-white p-2 rounded ${
            isDarkMode ? "bg-yellow-600" : "bg-yellow-600"
          } ${
            !swaggerData
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-700"
          }`}
          disabled={!swaggerData}
          title="Copy YAML to clipboard"
        >
          <FaClipboard className="mr-2" />
          {isCopying ? "Copying..." : "Copy YAML"}
        </button>

        <button
          onClick={handleDownload}
          className={`flex items-center text-white p-2 rounded ${
            isDarkMode ? "bg-green-600" : "bg-green-500"
          } ${
            !swaggerData
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-700"
          }`}
          disabled={!swaggerData}
          title="Download YAML"
        >
          <FaCloudDownloadAlt className="mr-2" />
          Download YAML
        </button>
      </div>
    </form>
  );
};

export default SchemaForm;