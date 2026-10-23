// ========================================
// SportsSync - Home Page
// ========================================

function Home() {
  return (
    <main>

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="hero" id="home">

        {/* Left Side - Hero Content */}
        <div className="hero-content">

          {/* Small Label */}
          <p className="hero-tag">
            🏆 COLLEGE SPORTS MANAGEMENT
          </p>

          {/* Main Heading */}
          <h1>
            Manage Teams.
            <br />
            Track Performance.
            <br />
            <span>Build Champions.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            A smart college sports management platform to manage
            players, teams, tournaments, matches and performance
            analytics from one place.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <button className="get-started-btn">
              Get Started →
            </button>

            <button className="explore-btn">
              Explore Features
            </button>

          </div>

          {/* Statistics */}
          <div className="hero-stats">

            <div className="stat">
              <h3>500+</h3>
              <p>Players</p>
            </div>

            <div className="stat">
              <h3>50+</h3>
              <p>Teams</p>
            </div>

            <div className="stat">
              <h3>100+</h3>
              <p>Matches</p>
            </div>

          </div>

        </div>

        {/* ========================================
            RIGHT SIDE - DASHBOARD PREVIEW
            ======================================== */}
        <div className="hero-dashboard">

          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div>
              <p>Performance Overview</p>
              <h3>Player Analytics</h3>
            </div>

            <span>2026</span>
          </div>

          {/* Main Performance Number */}
          <div className="performance-score">
            <h2>86%</h2>
            <p>Overall Performance</p>
          </div>

          {/* Simple Bar Chart */}
          <div className="mini-chart">

            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
            <div className="bar bar-5"></div>
            <div className="bar bar-6"></div>

          </div>

          {/* Chart Labels */}
          <div className="chart-labels">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>

        </div>

      </section>

      {/* ========================================
          FEATURES PREVIEW
          ======================================== */}
      <section className="features" id="features">

        <div className="section-heading">

          <p className="section-tag">
            POWERFUL FEATURES
          </p>

          <h2>
            Everything You Need to
            <span> Manage Sports</span>
          </h2>

          <p>
            Manage every aspect of college sports activities
            through one centralized platform.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Player Management</h3>
            <p>
              Manage player profiles, sports information,
              attendance and performance records.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Team Management</h3>
            <p>
              Create teams, manage players and track
              team performance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏟️</div>
            <h3>Tournament Management</h3>
            <p>
              Organize tournaments, fixtures and
              competition schedules.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚽</div>
            <h3>Match & Score</h3>
            <p>
              Record match scores, results and
              important match details.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Attendance Tracking</h3>
            <p>
              Track player participation and
              attendance efficiently.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Performance Analytics</h3>
            <p>
              Analyze player and team performance
              using meaningful statistics.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;