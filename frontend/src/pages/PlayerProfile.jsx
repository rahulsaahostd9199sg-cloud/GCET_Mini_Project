// ========================================
// SportsSync - Player Profile Page
// ========================================

function PlayerProfile() {
  return (
    <main className="profile-page">

      {/* ========================================
          PROFILE HEADER
          ======================================== */}
      <section className="profile-header">

        {/* Player Avatar */}
        <div className="profile-avatar">
          A
        </div>

        {/* Player Basic Information */}
        <div className="profile-info">
          <p className="section-tag">
            PLAYER PROFILE
          </p>

          <h1>Arjun Sharma</h1>

          <p>
            ⚽ Football • Forward
          </p>

          <span>
            College Sports Team
          </span>
        </div>

        {/* Profile Action */}
        <button className="edit-profile-btn">
          Edit Profile
        </button>

      </section>

      {/* ========================================
          PLAYER STATISTICS
          ======================================== */}
      <section className="profile-stats">

        <div className="profile-stat-card">
          <span>🏆</span>
          <h2>96%</h2>
          <p>Performance</p>
        </div>

        <div className="profile-stat-card">
          <span>📅</span>
          <h2>94%</h2>
          <p>Attendance</p>
        </div>

        <div className="profile-stat-card">
          <span>⚽</span>
          <h2>18</h2>
          <p>Matches</p>
        </div>

        <div className="profile-stat-card">
          <span>🥇</span>
          <h2>1</h2>
          <p>Rank</p>
        </div>

      </section>

      {/* ========================================
          PERFORMANCE SECTION
          ======================================== */}
      <section className="profile-content">

        <div className="profile-card">

          <div className="profile-card-header">
            <div>
              <p className="section-tag">
                PERFORMANCE
              </p>

              <h2>Performance Overview</h2>
            </div>

            <select>
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Simple Performance Chart */}
          <div className="profile-chart">

            <div className="profile-bar bar-height-1">
              <span>Jan</span>
            </div>

            <div className="profile-bar bar-height-2">
              <span>Feb</span>
            </div>

            <div className="profile-bar bar-height-3">
              <span>Mar</span>
            </div>

            <div className="profile-bar bar-height-4">
              <span>Apr</span>
            </div>

            <div className="profile-bar bar-height-5">
              <span>May</span>
            </div>

            <div className="profile-bar bar-height-6">
              <span>Jun</span>
            </div>

          </div>

        </div>

        {/* ========================================
            PLAYER INFORMATION
            ======================================== */}
        <div className="profile-card">

          <p className="section-tag">
            PLAYER DETAILS
          </p>

          <h2>Information</h2>

          <div className="details-list">

            <div>
              <span>Sport</span>
              <strong>Football</strong>
            </div>

            <div>
              <span>Position</span>
              <strong>Forward</strong>
            </div>

            <div>
              <span>Team</span>
              <strong>College Football Team</strong>
            </div>

            <div>
              <span>Matches Played</span>
              <strong>18</strong>
            </div>

            <div>
              <span>Attendance</span>
              <strong>94%</strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PlayerProfile;