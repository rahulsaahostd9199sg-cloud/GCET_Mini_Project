// ========================================
// SportsSync - Student / Player Dashboard
// ========================================

import { Link } from "react-router-dom";

function PlayerDashboard() {
  return (
    <main className="player-dashboard">

      {/* ========================================
          Dashboard Header
      ======================================== */}

      <section className="dashboard-header">

        <div>
          <span className="section-tag">
            STUDENT / PLAYER DASHBOARD
          </span>

          <h1>
            Welcome back, Arjun 👋
          </h1>

          <p>
            Manage your sports profile, team, matches
            and performance from one place.
          </p>
        </div>

        {/* Profile Button */}
        <Link
          to="/players/profile"
          className="dashboard-profile-btn"
        >
          View My Profile →
        </Link>

      </section>

      {/* ========================================
          Quick Statistics
      ======================================== */}

      <section className="dashboard-stats">

        <div className="dashboard-stat-card">
          <span>🏆</span>
          <h2>1</h2>
          <p>My Team</p>
        </div>

        <div className="dashboard-stat-card">
          <span>🎯</span>
          <h2>18</h2>
          <p>Matches Played</p>
        </div>

        <div className="dashboard-stat-card">
          <span>📈</span>
          <h2>96%</h2>
          <p>Performance</p>
        </div>

        <div className="dashboard-stat-card">
          <span>📅</span>
          <h2>94%</h2>
          <p>Attendance</p>
        </div>

      </section>

      {/* ========================================
          Main Dashboard Grid
      ======================================== */}

      <section className="dashboard-grid">

        {/* ========================================
            My Profile
        ======================================== */}

        <div className="dashboard-card profile-dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>My Profile</h2>
              <p>Personal sports information</p>
            </div>

            <span className="dashboard-card-icon">
              👤
            </span>
          </div>

          <div className="dashboard-profile-info">

            <div className="dashboard-avatar">
              A
            </div>

            <div>
              <h3>Arjun Sharma</h3>
              <p>Football • Forward</p>
              <span>College Sports Team</span>
            </div>

          </div>

          <Link
            to="/players/profile"
            className="dashboard-outline-btn"
          >
            View Profile
          </Link>

        </div>

        {/* ========================================
            My Team
        ======================================== */}

        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>My Team</h2>
              <p>Current team information</p>
            </div>

            <span className="dashboard-card-icon">
              ⚽
            </span>
          </div>

          <div className="team-dashboard-info">

            <h3>Football Team</h3>

            <p>
              Football • 24 Players
            </p>

            <div className="dashboard-progress">

              <div className="dashboard-progress-top">
                <span>Team Performance</span>
                <strong>92%</strong>
              </div>

              <div className="dashboard-progress-bar">
                <div
                  className="dashboard-progress-fill"
                  style={{ width: "92%" }}
                ></div>
              </div>

            </div>

          </div>

          <Link
            to="/teams"
            className="dashboard-outline-btn"
          >
            View Team
          </Link>

        </div>

      </section>

      {/* ========================================
          Upcoming Matches
      ======================================== */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">

          <div>
            <h2>Upcoming Matches</h2>
            <p>Your next scheduled matches</p>
          </div>

          <Link
            to="/matches"
            className="dashboard-view-all"
          >
            View All →
          </Link>

        </div>

        <div className="dashboard-match-list">

          {/* Match 1 */}
          <div className="dashboard-match-card">

            <div className="match-date-box">
              <strong>18</strong>
              <span>OCT</span>
            </div>

            <div className="dashboard-match-info">
              <span>⚽ FOOTBALL</span>
              <h3>
                Football Team
                <strong> vs </strong>
                College United
              </h3>
              <p>
                🕓 4:00 PM &nbsp; • &nbsp;
                📍 College Ground
              </p>
            </div>

            <span className="dashboard-upcoming">
              Upcoming
            </span>

          </div>

          {/* Match 2 */}
          <div className="dashboard-match-card">

            <div className="match-date-box">
              <strong>25</strong>
              <span>OCT</span>
            </div>

            <div className="dashboard-match-info">
              <span>⚽ FOOTBALL</span>
              <h3>
                College United
                <strong> vs </strong>
                Football Team
              </h3>
              <p>
                🕓 4:30 PM &nbsp; • &nbsp;
                📍 College Ground
              </p>
            </div>

            <span className="dashboard-upcoming">
              Upcoming
            </span>

          </div>

        </div>

      </section>

      {/* ========================================
          Tournament + Performance
      ======================================== */}

      <section className="dashboard-grid">

        {/* Tournament */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <h2>Upcoming Tournament</h2>
              <p>Next tournament you're participating in</p>
            </div>

            <span className="dashboard-card-icon">
              🏆
            </span>

          </div>

          <div className="tournament-dashboard-info">

            <span className="dashboard-status">
              UPCOMING
            </span>

            <h3>
              Annual Football Championship
            </h3>

            <p>
              📅 15 October 2026
            </p>

            <p>
              👥 8 Teams &nbsp; • &nbsp; 16 Matches
            </p>

          </div>

          <Link
            to="/tournaments"
            className="dashboard-outline-btn"
          >
            View Tournament
          </Link>

        </div>

        {/* Performance */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <h2>My Performance</h2>
              <p>Current overall performance</p>
            </div>

            <span className="dashboard-card-icon">
              📊
            </span>

          </div>

          <div className="performance-dashboard-value">
            <strong>96%</strong>
            <span>Excellent Performance</span>
          </div>

          <div className="dashboard-progress">

            <div className="dashboard-progress-top">
              <span>Performance</span>
              <strong>96%</strong>
            </div>

            <div className="dashboard-progress-bar">
              <div
                className="dashboard-progress-fill"
                style={{ width: "96%" }}
              ></div>
            </div>

          </div>

          <Link
            to="/analytics"
            className="dashboard-outline-btn"
          >
            View Analytics
          </Link>

        </div>

      </section>

      {/* ========================================
          Recent Results
      ======================================== */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">

          <div>
            <h2>Recent Match Results</h2>
            <p>Your latest match performance</p>
          </div>

          <Link
            to="/matches"
            className="dashboard-view-all"
          >
            View All →
          </Link>

        </div>

        <div className="dashboard-results">

          <div className="dashboard-result-row">

            <div>
              <span>⚽ Football</span>
              <h3>
                Football Team vs College United
              </h3>
            </div>

            <strong className="result-win">
              WON
            </strong>

            <span className="result-score">
              3 - 1
            </span>

          </div>

          <div className="dashboard-result-row">

            <div>
              <span>⚽ Football</span>
              <h3>
                Football Team vs Campus XI
              </h3>
            </div>

            <strong className="result-win">
              WON
            </strong>

            <span className="result-score">
              2 - 0
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PlayerDashboard;