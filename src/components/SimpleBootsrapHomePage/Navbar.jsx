import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const MyNavbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="w-100 fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Hi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/youtube">YouTube</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/snippets">Web Snippets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;