import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Sync with the dark mode applied on the body
    setDarkMode(document.body.classList.contains("dark-mode"));

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains("dark-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Container className="mt-5 text-center">
      <h1>Welcome</h1>
      <p>Explore my projects, YouTube content, and web snippets below!</p>

      {/* Cards Section */}
      <Row className="mt-4 g-4">
        <Col md={4}>
          <Card className={`card ${darkMode ? "dark-card" : ""}`}>
            <Card.Body>
              <Card.Title>View Projects</Card.Title>
              <Card.Text>Check out my latest web development projects.</Card.Text>
              <Link to="/projects" className="btn btn-primary">Explore</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={`card ${darkMode ? "dark-card" : ""}`}>
            <Card.Body>
              <Card.Title>Go to YouTube</Card.Title>
              <Card.Text>Watch my latest gaming videos.</Card.Text>
              <Link to="/youtube" className="btn btn-danger">Watch</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={`card ${darkMode ? "dark-card" : ""}`}>
            <Card.Body>
              <Card.Title>Explore Snippets</Card.Title>
              <Card.Text>Try out some cool web development snippets.</Card.Text>
              <Link to="/snippets" className="btn btn-success">Try</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;