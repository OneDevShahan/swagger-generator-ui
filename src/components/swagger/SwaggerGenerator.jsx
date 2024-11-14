import React, { useEffect, useRef, useState } from "react";
import "swagger-ui-react/swagger-ui.css"; // Swagger UI CSS
import { checkHealth, generateSwagger } from "../../service/api"; // Import services
import SwaggerViewer from "./SwaggerViewer";
import SchemaForm from "./SwaggerForm";
import BackendDownComponent from "../utility/BackendDownComponent";

const SwaggerGenerator = ({ isDarkMode, showToast }) => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [swaggerData, setSwaggerData] = useState(null);
  const [isBackendDown, setIsBackendDown] = useState(false);
  const [toastShown, setToastShown] = useState(false); // Track if toast is shown
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
        setIsBackendDown(true);
        if (!toastShown) {
          showToast("Backend is down. Please try again later.", "error");
          setToastShown(true);
        }
      }
    };

    checkHealthStatus();
    // Optionally, you can use setInterval to check the health every x seconds
    const intervalId = setInterval(checkHealthStatus, 30000); // Check every 30 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, [toastShown, showToast]);

  const message = {
    title: "Coming Soon",
    description:
      "We're working hard to bring the backend up. Please check back later.",
  };

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

  const handleDownload = async (e) => {
    e.preventDefault(); // Prevent form submission
    const blob = new Blob([swaggerData], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "swagger.yaml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`p-4 ${isDarkMode ? "text-white" : "text-black"} min-h-screen`}
    >
      {isBackendDown && (
        <BackendDownComponent
          isBackendDown={isBackendDown}
          message={message}
          isDarkMode={isDarkMode}
        />
      )}
      {isHealthy && (
        <div>
          <SchemaForm
            onSubmit={handleGenerateSwagger}
            onClear={clearData}
            isLoading={isLoading}
            swaggerData={swaggerData}
            copyToClipboard={copyToClipboard}
            handleDownload={handleDownload}
            isDarkMode={isDarkMode}
            showToast={showToast}
          />
          {swaggerData && (
            <div
              ref={swaggerViewerRef}
              className={`swagger-container border rounded-lg my-6 px-2 ${
                isDarkMode ? "bg-gray-500" : "bg-white"
              }`}
            >
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