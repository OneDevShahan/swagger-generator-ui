import React, { useEffect, useRef, useState } from "react";
import "swagger-ui-react/swagger-ui.css"; // Swagger UI CSS
import { checkHealth, generateSwagger } from "../../service/api"; // Import services
import SwaggerViewer from "./SwaggerViewer";
import SchemaForm from "./SwaggerForm";

const SwaggerGenerator = ({ isDarkMode, showToast }) => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [swaggerData, setSwaggerData] = useState(null);
  const swaggerViewerRef = useRef(null); // Create a ref for SwaggerViewer

  // Check health status
  useEffect(() => {
    const checkHealthStatus = async () => {
      try {
        const healthResponse = await checkHealth();
        if (
          healthResponse.status === 200 &&
          healthResponse.data === "healthy"
        ) {
          setIsHealthy(true);
        }
      } catch (error) {
        setIsHealthy(false);
        showToast("Backend service is not available.", "error");
      }
    };

    checkHealthStatus();
  }, []);

  // Scroll to Swagger viewer when swaggerData changes
  useEffect(() => {
    if (swaggerData && swaggerViewerRef.current) {
      swaggerViewerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [swaggerData]);

  // Handle the form submission
  const handleGenerateSwagger = async (data) => {
    if (!isHealthy) {
      showToast(
        "Backend service is not healthy. Please try again later.",
        "error"
      );
      return;
    }
    setIsLoading(true);

    try {
      console.log("Request Payload ==> ", data);
      const swaggerResponse = await generateSwagger(data);
      setSwaggerData(swaggerResponse); // Set Swagger data on successful response
      showToast("Swagger documentation generated successfully!", "success");
      // Scroll to SwaggerViewer
      if (swaggerViewerRef.current) {
        swaggerViewerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch (error) {
      showToast("Error generating Swagger documentation.", "error");
    } finally {
      setIsLoading(false); // Reset loading state when request finishes
    }
  };

  // Clear the input and swaggerData
  const clearData = () => {
    setSwaggerData(null);
    showToast("Data cleared.", "info");
  };

  const copyToClipboard = () => {
    if (swaggerData) {
      navigator.clipboard
        .writeText(swaggerData)
        .then(() => {
          showToast("Swagger YAML copied to clipboard!", "success");
        })
        .catch(() => {
          showToast("Failed to copy Swagger YAML to clipboard.", "error");
        });
    }
  };

  return (
    <div
      className={`p-4 ${isDarkMode ? "text-white" : "text-black"} min-h-screen`}
    >
      {!isHealthy && <p>Backend service is not available.</p>}
      {isHealthy && (
        <div>
          <SchemaForm
            onSubmit={handleGenerateSwagger}
            onClear={clearData}
            isLoading={isLoading}
            swaggerData={swaggerData}
            copyToClipboard={copyToClipboard}
            isDarkMode={isDarkMode}
            showToast={showToast}
          />
          {swaggerData && (
            <div ref={swaggerViewerRef} className="border rounded-md my-6 px-2">
              <SwaggerViewer
                yamlContent={swaggerData}
                isDarkMode={isDarkMode}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SwaggerGenerator;