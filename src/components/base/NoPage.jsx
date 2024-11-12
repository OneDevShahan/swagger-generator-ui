const NoPage = ({ isDarkMode }) => {
  return (
    <h1 className={`text-gray-900 ${isDarkMode ? "text-white" : "text-black"}`}>
      404 - Page Not Found
    </h1>
  );
};

export default NoPage;
