import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerViewer = ({ yamlContent, isDarkMode }) => {
  if (!yamlContent) {
    return (
      <p
        className={`text-gray-500 ${isDarkMode ? "text-white" : "text-black"}`}
      >
        Submit schemas to generate Swagger documentation.
      </p>
    );
  }

  return (
    <div
      className={`swagger-container ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <SwaggerUI spec={yamlContent} />
    </div>
  );
};

export default SwaggerViewer;