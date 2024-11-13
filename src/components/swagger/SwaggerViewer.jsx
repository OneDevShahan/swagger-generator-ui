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
      className={`swagger-container ${
        isDarkMode ? "bg-gray-500 " : "bg-white text-black"
      }`}
    >
      <SwaggerUI
        spec={yamlContent}
        docExpansion="none"
        defaultModelsExpandDepth={-1} // Hide schemas initially if needed
      />
    </div>
  );
};

export default SwaggerViewer;