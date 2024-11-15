import httpClient from "./httpClient";

// Health check API call
export const checkHealth = async () => {
  try {
    const response = await httpClient.get("/swagger/health");
    return response ? response : null;
  } catch (error) {
    console.error("Error checking health status:", error);
    throw error;
  }
};

// Swagger generation API call
export const generateSwagger = async (payload) => {
  try {
    const response = await httpClient.post("/swagger/generate", payload);
    return response.data;
  } catch (error) {
    console.error("Error generating Swagger:", error);
    throw error;
  }
};