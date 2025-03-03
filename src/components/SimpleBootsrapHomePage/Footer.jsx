import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    };
    window.addEventListener("storage", checkDarkMode);
    return () => window.removeEventListener("storage", checkDarkMode);
  }, []);

  return (
    <footer className={`footer w-100 position-absolute bottom-0 end-0 ${darkMode ? "dark-mode" : ""}`}>
      <Container>
        <p>Follow me on:</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/Rohans17we" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;