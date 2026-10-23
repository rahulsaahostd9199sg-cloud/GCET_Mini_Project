// ========================================
// SportsSync - Coach / Team Manager Dashboard
// ========================================

import { Link } from "react-router-dom";

function CoachDashboard() {
  return (
    <main className="coach-dashboard">

      {/* ========================================
          Dashboard Header
      ======================================== */}

      <section className="coach-header">

        <div>
          <span className="section-tag">
            COACH / TEAM MANAGER DASHBOARD
          </span>

          <h1>
            Welcome back, Coach 👋
          </h1>

          <p>
            Manage your team, players, matches and
            performance from one centralized dashboard.
          </p>
        </div>

        <Link
          to="/teams"
          className="coach-primary-btn"
        >
          Manage My Team →
        </Link>

      </section>

      {/* ========================================
          Summary Statistics
      ======================================== */}

      <section className="coach-stats">

        <div className="coach-stat-card">
          <span>👥</span>
          <h2>24</h2>
          <p>Total Players</p>
        </div>

        <div className="coach-stat-card">
          <span>⚽</span>
          <h2>18</h2>
          <p>Matches</p>
        </div>

        <div className="coach-stat-card">
          <span>📈</span>
          <h2>92%</h2>
          <p>Team Performance</p>
        </div>

        <div className="coach-stat-card">
          <span>📅</span>
          <h2>94%</h2>
          <p>Attendance</p>
        </div>

      </section>

      {/* ========================================
          Main Management Cards
      ======================================== */}

      <section className="coach-grid">

        {/* Manage Players */}

        <div className="coach-card">

          <div className="coach-card-header">

            <div>
              <h2>Manage Players</h2>
              <p>View and manage your team players</p>
            </div>

            <span className="coach-card-icon">
              👥
            </span>

          </div>

          <div className="player-mini-list">

            <div className="player-mini-row">
              <div className="player-mini-avatar">
                A
              </div>

              <div>
                <h3>Arjun Sharma</h3>
                <span>Forward</span>
              </div>

              <strong>96%</strong>
            </div>

            <div className="player-mini-row">
              <div className="player-mini-avatar">
                R
              </div>

              <div>
                <h3>Rahul Verma</h3>
                <span>Midfielder</span>
              </div>

              <strong>92%</strong>
            </div>

            <div className="player-mini-row">
              <div className="player-mini-avatar">
                A
              </div>

              <div>
                <h3>Aman Singh</h3>
                <span>Defender</span>
              </div>

              <strong>89%</strong>
            </div>

          </div>

          <Link
            to="/players"
            className="coach-outline-btn"
          >
            View All Players →
          </Link>

        </div>

        {/* Team Management */}

        <div className="coach-card">

          <div className="coach-card-header">

            <div>
              <h2>My Team</h2>
              <p>Current team information</p>
            </div>

            <span className="coach-card-icon">
              ⚽
            </span>

          </div>

          <div className="coach-team-info">

            <div className="coach-team-icon">
              ⚽
            </div>

            <div>
              <h3>Football Team</h3>
              <p>College Sports Team</p>
            </div>

          </div>

          <div className="coach-team-stats">

            <div>
              <strong>24</strong>
              <span>Players</span>
            </div>

            <div>
              <strong>18</strong>
              <span>Matches</span>
            </div>

            <div>
              <strong>92%</strong>
              <span>Performance</span>
            </div>

          </div>

          <Link
            to="/teams"
            className="coach-outline-btn"
          >
            Manage Team →
          </Link>

        </div>

      </section>

      {/* ========================================
          Match Schedule
      ======================================== */}

      <section className="coach-section">

        <div className="coach-section-header">

          <div>
            <h2>Match Schedule</h2>
            <p>Upcoming and recent team matches</p>
          </div>

          <Link
            to="/matches"
            className="coach-view-all"
          >
            View All →
          </Link>

        </div>

        <div className="coach-match-list">

          {/* Upcoming Match */}

          <div className="coach-match-card">

            <div className="coach-match-date">
              <strong>18</strong>
              <span>OCT</span>
            </div>

            <div className="coach-match-info">

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

            <span className="coach-match-status">
              Upcoming
            </span>

          </div>

          {/* Completed Match */}

          <div className="coach-match-card">

            <div className="coach-match-date">
              <strong>12</strong>
              <span>OCT</span>
            </div>

            <div className="coach-match-info">

              <span>⚽ FOOTBALL</span>

              <h3>
                Football Team
                <strong> vs </strong>
                Campus XI
              </h3>

              <p>
                🕓 5:00 PM &nbsp; • &nbsp;
                📍 College Ground
              </p>

            </div>

            <span className="coach-match-completed">
              Completed
            </span>

          </div>

        </div>

      </section>

      {/* ========================================
          Tournament + Performance
      ======================================== */}

      <section className="coach-grid">

        {/* Tournament */}

        <div className="coach-card">

          <div className="coach-card-header">

            <div>
              <h2>Tournaments</h2>
              <p>Manage tournament participation</p>
            </div>

            <span className="coach-card-icon">
              🏆
            </span>

          </div>

          <div className="coach-tournament">

            <span>UPCOMING</span>

            <h3>
              Annual Football Championship
            </h3>

            <p>
              📅 15 October 2026
            </p>

            <p>
              👥 8 Teams &nbsp; • &nbsp;
              🏟️ 16 Matches
            </p>

          </div>

          <Link
            to="/tournaments"
            className="coach-outline-btn"
          >
            View Tournaments →
          </Link>

        </div>

        {/* Performance */}

        <div className="coach-card">

          <div className="coach-card-header">

            <div>
              <h2>Team Performance</h2>
              <p>Overall team performance</p>
            </div>

            <span className="coach-card-icon">
              📊
            </span>

          </div>

          <div className="coach-performance">

            <strong>92%</strong>

            <span>
              Excellent Team Performance
            </span>

          </div>

          <div className="coach-progress">

            <div className="coach-progress-top">
              <span>Overall Performance</span>
              <strong>92%</strong>
            </div>

            <div className="coach-progress-bar">

              <div
                className="coach-progress-fill"
                style={{ width: "92%" }}
              ></div>

            </div>

          </div>

          <Link
            to="/analytics"
            className="coach-outline-btn"
          >
            View Analytics →
          </Link>

        </div>

      </section>

      {/* ========================================
          Player Performance
      ======================================== */}

      <section className="coach-section">

        <div className="coach-section-header">

          <div>
            <h2>Player Performance</h2>
            <p>Top performing players in your team</p>
          </div>

          <Link
            to="/analytics"
            className="coach-view-all"
          >
            View Analytics →
          </Link>

        </div>

        <div className="coach-performance-table">

          <div className="coach-table-header">
            <span>PLAYER</span>
            <span>POSITION</span>
            <span>PERFORMANCE</span>
            <span>ATTENDANCE</span>
          </div>

          <div className="coach-table-row">

            <div className="coach-player-cell">
              <div className="coach-player-avatar">
                A
              </div>

              <strong>Arjun Sharma</strong>
            </div>

            <span>Forward</span>

            <strong className="performance-value">
              96%
            </strong>

            <span>94%</span>

          </div>

          <div className="coach-table-row">

            <div className="coach-player-cell">
              <div className="coach-player-avatar">
                R
              </div>

              <strong>Rahul Verma</strong>
            </div>

            <span>Midfielder</span>

            <strong className="performance-value">
              92%
            </strong>

            <span>91%</span>

          </div>

          <div className="coach-table-row">

            <div className="coach-player-cell">
              <div className="coach-player-avatar">
                A
              </div>

              <strong>Aman Singh</strong>
            </div>

            <span>Defender</span>

            <strong className="performance-value">
              89%
            </strong>

            <span>88%</span>

          </div>

        </div>

      </section>

      {/* ========================================
          Recent Results
      ======================================== */}

      <section className="coach-section">

        <div className="coach-section-header">

          <div>
            <h2>Recent Results</h2>
            <p>Latest team match results</p>
          </div>

          <Link
            to="/matches"
            className="coach-view-all"
          >
            View All →
          </Link>

        </div>

        <div className="coach-results">

          <div className="coach-result-row">

            <div>
              <span>⚽ Football</span>
              <h3>
                Football Team vs College United
              </h3>
            </div>

            <strong className="coach-win">
              WON
            </strong>

            <strong className="coach-score">
              3 - 1
            </strong>

          </div>

          <div className="coach-result-row">

            <div>
              <span>⚽ Football</span>
              <h3>
                Football Team vs Campus XI
              </h3>
            </div>

            <strong className="coach-win">
              WON
            </strong>

            <strong className="coach-score">
              2 - 0
            </strong>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CoachDashboard;