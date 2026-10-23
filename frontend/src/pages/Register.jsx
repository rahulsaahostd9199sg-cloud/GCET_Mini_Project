// ========================================
// SportsSync - Register Page
// Professional Account Creation UI
// ========================================

import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="auth-page">

      {/* ========================================
          Left Side - Registration Introduction
          ======================================== */}
      <section className="auth-intro">

        {/* Brand */}
        <div className="auth-brand">
          ⚡ Sports<span>Sync</span>
        </div>

        <span className="section-tag">
          JOIN SPORTSSYNC
        </span>

        <h1>
          Build Your.
          <br />
          Sports Journey.
        </h1>

        <p>
          Create your SportsSync account to manage your
          sports profile, track performance and stay
          connected with college sports activities.
        </p>


        {/* Registration Benefits */}
        <div className="auth-features">

          <div className="auth-feature">
            <span>👤</span>
            <p>Create Your Player Profile</p>
          </div>

          <div className="auth-feature">
            <span>📈</span>
            <p>Track Your Performance</p>
          </div>

          <div className="auth-feature">
            <span>🏆</span>
            <p>Participate in College Sports</p>
          </div>

        </div>

      </section>


      {/* ========================================
          Right Side - Registration Form
          ======================================== */}
      <section className="auth-card">

        {/* Form Header */}
        <div className="auth-card-header">

          <div className="auth-mobile-logo">
            ⚡ Sports<span>Sync</span>
          </div>

          <h2>
            Create Account
          </h2>

          <p>
            Register to get started with SportsSync
          </p>

        </div>


        {/* Registration Form */}
        <form className="auth-form">

          {/* Full Name */}
          <div className="auth-field">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

          </div>


          {/* Email */}
          <div className="auth-field">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>


          {/* Role */}
          <div className="auth-field">

            <label>
              Account Role
            </label>

            <select className="auth-select">
              <option value="">
                Select your role
              </option>

              <option value="player">
                Student / Player
              </option>

              <option value="coach">
                Coach
              </option>

              <option value="faculty">
                Sports Faculty
              </option>

              <option value="admin">
                Sports Administrator
              </option>
            </select>

          </div>


          {/* Password */}
          <div className="auth-field">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
            />

          </div>


          {/* Confirm Password */}
          <div className="auth-field">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
            />

          </div>


          {/* Terms */}
          <div className="remember-row">

            <label>

              <input
                type="checkbox"
              />

              <span>
                I agree to the SportsSync terms
              </span>

            </label>

          </div>


          {/* Register Button */}
          <button
            type="submit"
            className="auth-submit-btn"
          >
            Create Account →
          </button>

        </form>


        {/* Login Link */}
        <div className="auth-footer">

          <p>
            Already have an account?
            {" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

// ========================================
// Export Register Page
// ========================================

export default Register;