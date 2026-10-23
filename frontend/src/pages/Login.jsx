// ========================================
// SportsSync - Role Based Login Page
// ========================================

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // ========================================
  // State
  // ========================================

  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // ========================================
  // Login Handler
  // ========================================

  const handleLogin = (e) => {
    e.preventDefault();

    // ----------------------------------------
    // Role select nahi kiya
    // ----------------------------------------

    if (!role) {
      alert("Please select your account role.");
      return;
    }

    // ----------------------------------------
    // Form se email lena
    // ----------------------------------------

    const email = e.target.email.value;

    // ----------------------------------------
    // Logged-in user ka session
    // localStorage me save karna
    // ----------------------------------------

    const user = {
      email: email,
      role: role,
    };

    localStorage.setItem(
      "sportsSyncUser",
      JSON.stringify(user)
    );

    // ----------------------------------------
    // Role ke according dashboard
    // ----------------------------------------

    if (role === "player") {
      navigate("/player-dashboard");
    }

    else if (role === "coach") {
      navigate("/coach-dashboard");
    }

    else if (role === "admin") {
      navigate("/admin-dashboard");
    }
  };

  // ========================================
  // Login Page UI
  // ========================================

  return (
    <main className="auth-page">

      {/* ========================================
          Left Side - Introduction
      ======================================== */}

      <section className="auth-intro">

        {/* Brand */}
        <div className="auth-brand">
          ⚡ Sports<span>Sync</span>
        </div>

        {/* Tag */}
        <span className="section-tag">
          WELCOME BACK
        </span>

        {/* Heading */}
        <h1>
          Manage Sports.
          <br />
          Track Performance.
        </h1>

        {/* Description */}
        <p>
          Login to your SportsSync account and access
          your personalized sports management dashboard.
        </p>

        {/* Features */}
        <div className="auth-features">

          <div className="auth-feature">
            <span>📊</span>
            <p>Performance Analytics</p>
          </div>

          <div className="auth-feature">
            <span>🏆</span>
            <p>Team & Tournament Management</p>
          </div>

          <div className="auth-feature">
            <span>👥</span>
            <p>Player Management</p>
          </div>

        </div>

      </section>


      {/* ========================================
          Right Side - Login Card
      ======================================== */}

      <section className="auth-card">

        {/* Mobile Logo */}
        <div className="auth-card-header">

          <div className="auth-mobile-logo">
            ⚡ Sports<span>Sync</span>
          </div>

          <h2>
            Welcome Back
          </h2>

          <p>
            Login to your SportsSync account
          </p>

        </div>


        {/* ========================================
            Login Form
        ======================================== */}

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          {/* Email */}
          <div className="auth-field">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

          </div>


          {/* Password */}
          <div className="auth-field">

            <div className="password-label">

              <label>
                Password
              </label>

              <a href="#forgot-password">
                Forgot Password?
              </a>

            </div>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />

          </div>


          {/* Role */}
          <div className="auth-field">

            <label>
              Login As
            </label>

            <select
              className="auth-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >

              <option value="">
                Select your role
              </option>

              <option value="player">
                Student / Player
              </option>

              <option value="coach">
                Coach / Team Manager
              </option>

              <option value="admin">
                Administrator
              </option>

            </select>

          </div>


          {/* Remember Me */}
          <div className="remember-row">

            <label>

              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>

            </label>

          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="auth-submit-btn"
          >
            Login to SportsSync →
          </button>

        </form>


        {/* ========================================
            Register Link
        ======================================== */}

        <div className="auth-footer">

          <p>
            Don't have an account?{" "}

            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Login;