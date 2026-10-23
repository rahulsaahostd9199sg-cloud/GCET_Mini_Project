// ========================================
// SportsSync - Navbar Component
// ========================================

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Website Logo */}
      <div className="logo">
        ⚡ Sports<span>Sync</span>
      </div>

      {/* Main Navigation Links */}
      <div className="nav-links">

        {/* Home Page */}
        <Link to="/">Home</Link>

        {/* About Page */}
        <Link to="/about">About</Link>

        {/* Players Page */}
        <Link to="/players">Players</Link>

        {/* Teams Page */}
        <Link to="/teams">Teams</Link>

        {/* Tournaments Page */}
        <Link to="/tournaments">Tournaments</Link>

        {/* Matches Page */}
        <Link to="/matches">Matches</Link>

        {/* Analytics Page */}
        <Link to="/analytics">Analytics</Link>

        {/* Contact Page */}
        <Link to="/contact">Contact</Link>

      </div>

      {/* Authentication Buttons */}
      <div className="nav-buttons">

        {/* Login Button */}
        <Link to="/login" className="login-btn">
          Login
        </Link>

        {/* Register Button */}
        <Link to="/register" className="get-started-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;