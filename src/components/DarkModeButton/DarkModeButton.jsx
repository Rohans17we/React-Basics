import { useState, useEffect } from "react";
import "./DarkModeButton.css";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false); // No local storage, resets on refresh

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      className={`dark-mode-button ${darkMode ? "light-mode" : ""}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeButton;
