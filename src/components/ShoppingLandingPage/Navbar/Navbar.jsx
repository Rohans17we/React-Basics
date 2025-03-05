import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="shop">shop</span>
          <span className="ping">ping</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="login">Log in</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;