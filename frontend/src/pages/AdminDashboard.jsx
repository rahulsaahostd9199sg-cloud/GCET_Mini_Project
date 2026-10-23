// ========================================
// SportsSync - Administrator Dashboard
// ========================================

import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <main className="admin-dashboard">

      {/* ========================================
          Dashboard Header
      ======================================== */}
      <section className="admin-header">
        <div>
          <span className="section-tag">ADMINISTRATOR PANEL</span>

          <h1>Welcome back, Admin 👋</h1>

          <p>
            Manage players, teams, tournaments, matches,
            results and sports statistics from one place.
          </p>
        </div>

        {/* Admin Action */}
        <Link to="/players" className="admin-primary-btn">
          Manage Players →
        </Link>
      </section>


      {/* ========================================
          Summary Statistics
      ======================================== */}
      <section className="admin-stats">

        <div className="admin-stat-card">
          <span>👥</span>
          <h2>98</h2>
          <p>Total Players</p>
          <small>+12 this month</small>
        </div>

        <div className="admin-stat-card">
          <span>🏆</span>
          <h2>12</h2>
          <p>Total Teams</p>
          <small>6 active sports</small>
        </div>

        <div className="admin-stat-card">
          <span>🎯</span>
          <h2>6</h2>
          <p>Upcoming Tournaments</p>
          <small>48 participating teams</small>
        </div>

        <div className="admin-stat-card">
          <span>⚽</span>
          <h2>24</h2>
          <p>Total Matches</p>
          <small>2 currently live</small>
        </div>

      </section>


      {/* ========================================
          Management Cards
      ======================================== */}
      <section className="admin-management">

        <div className="admin-section-header">
          <div>
            <h2>System Management</h2>
            <p>Quick access to important administration features.</p>
          </div>
        </div>


        <div className="admin-management-grid">

          {/* Players */}
          <div className="admin-management-card">
            <div className="admin-card-icon">👥</div>

            <h3>Manage Players</h3>

            <p>
              View player profiles, performance,
              attendance and ranking information.
            </p>

            <Link to="/players">
              Manage Players →
            </Link>
          </div>


          {/* Teams */}
          <div className="admin-management-card">
            <div className="admin-card-icon">🏆</div>

            <h3>Manage Teams</h3>

            <p>
              Create, update and manage college
              sports teams and their players.
            </p>

            <Link to="/teams">
              Manage Teams →
            </Link>
          </div>


          {/* Tournaments */}
          <div className="admin-management-card">
            <div className="admin-card-icon">🥇</div>

            <h3>Manage Tournaments</h3>

            <p>
              Create tournaments, add teams and
              manage tournament schedules.
            </p>

            <Link to="/tournaments">
              Manage Tournaments →
            </Link>
          </div>


          {/* Matches */}
          <div className="admin-management-card">
            <div className="admin-card-icon">📅</div>

            <h3>Schedule Matches</h3>

            <p>
              Schedule matches, assign venues,
              teams and match timings.
            </p>

            <Link to="/matches">
              Manage Matches →
            </Link>
          </div>


          {/* Analytics */}
          <div className="admin-management-card">
            <div className="admin-card-icon">📊</div>

            <h3>Sports Analytics</h3>

            <p>
              Analyze player performance,
              attendance and team statistics.
            </p>

            <Link to="/analytics">
              View Analytics →
            </Link>
          </div>


          {/* Results */}
          <div className="admin-management-card">
            <div className="admin-card-icon">📋</div>

            <h3>Manage Results</h3>

            <p>
              Update match results and review
              team and player performance.
            </p>

            <Link to="/matches">
              Manage Results →
            </Link>
          </div>

        </div>

      </section>


      {/* ========================================
          Recent Activity
      ======================================== */}
      <section className="admin-bottom-grid">

        {/* Recent Activity */}
        <div className="admin-panel">

          <div className="admin-panel-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest system updates</p>
            </div>
          </div>

          <div className="admin-activity">

            <div className="activity-item">
              <span>👤</span>

              <div>
                <strong>New player registered</strong>
                <p>Rahul Verma joined the Cricket team.</p>
              </div>

              <small>2h ago</small>
            </div>


            <div className="activity-item">
              <span>🏆</span>

              <div>
                <strong>Tournament created</strong>
                <p>Annual Football Championship added.</p>
              </div>

              <small>5h ago</small>
            </div>


            <div className="activity-item">
              <span>📅</span>

              <div>
                <strong>Match scheduled</strong>
                <p>Football Team vs College United.</p>
              </div>

              <small>1d ago</small>
            </div>

          </div>

        </div>


        {/* System Overview */}
        <div className="admin-panel">

          <div className="admin-panel-header">
            <div>
              <h2>System Overview</h2>
              <p>Current sports statistics</p>
            </div>
          </div>

          <div className="system-overview">

            <div>
              <span>Active Players</span>
              <strong>98</strong>
            </div>

            <div>
              <span>Active Teams</span>
              <strong>12</strong>
            </div>

            <div>
              <span>Upcoming Matches</span>
              <strong>12</strong>
            </div>

            <div>
              <span>Average Performance</span>
              <strong>87%</strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;