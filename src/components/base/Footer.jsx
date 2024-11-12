import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
      } text-center py-4 mt-8 `}
    >
      <p>&copy; 2024 Swagger Generator. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
