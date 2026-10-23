// ========================================
// SportsSync - Analytics Page
// Player Performance Analytics Dashboard
// ========================================

function Analytics() {
  return (
    <main className="analytics-page">

      {/* ========================================
          Page Header
      ======================================== */}
      <section className="analytics-header">

        <div>
          <span className="section-tag">
            PERFORMANCE ANALYTICS
          </span>

          <h1>Player Performance Analytics</h1>

          <p>
            Analyze player performance, attendance, match statistics
            and overall sports performance from one dashboard.
          </p>
        </div>

        {/* Time Period Selector */}
        <select className="analytics-select">
          <option>Last 6 Months</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>

      </section>


      {/* ========================================
          Analytics Summary Cards
      ======================================== */}
      <section className="analytics-summary">

        <div className="analytics-summary-card">
          <span>📈</span>
          <h2>86%</h2>
          <p>Average Performance</p>
          <small>+8.4% this month</small>
        </div>

        <div className="analytics-summary-card">
          <span>🎯</span>
          <h2>92%</h2>
          <p>Average Attendance</p>
          <small>+4.2% this month</small>
        </div>

        <div className="analytics-summary-card">
          <span>🏆</span>
          <h2>24</h2>
          <p>Total Matches</p>
          <small>18 completed</small>
        </div>

        <div className="analytics-summary-card">
          <span>👥</span>
          <h2>98</h2>
          <p>Active Players</p>
          <small>Across 6 sports</small>
        </div>

      </section>


      {/* ========================================
          Performance Chart
      ======================================== */}
      <section className="analytics-chart-card">

        <div className="analytics-card-header">

          <div>
            <h2>Performance Overview</h2>
            <p>Average player performance over recent months</p>
          </div>

          <span className="chart-value">
            86%
          </span>

        </div>


        {/* Simple CSS Bar Chart */}
        <div className="analytics-chart">

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-72"></div>
            <span>Jan</span>
          </div>

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-78"></div>
            <span>Feb</span>
          </div>

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-70"></div>
            <span>Mar</span>
          </div>

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-84"></div>
            <span>Apr</span>
          </div>

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-90"></div>
            <span>May</span>
          </div>

          <div className="analytics-bar-wrapper">
            <div className="analytics-bar bar-86"></div>
            <span>Jun</span>
          </div>

        </div>

      </section>


      {/* ========================================
          Player Ranking Section
      ======================================== */}
      <section className="ranking-card">

        <div className="analytics-card-header">

          <div>
            <h2>Top Performing Players</h2>
            <p>Players ranked according to performance data</p>
          </div>

          <button className="view-all-btn">
            View All →
          </button>

        </div>


        {/* Player 1 */}
        <div className="ranking-player">

          <div className="ranking-number">
            01
          </div>

          <div className="ranking-avatar">
            A
          </div>

          <div className="ranking-info">
            <h3>Arjun Sharma</h3>
            <p>⚽ Football • Forward</p>
          </div>

          <div className="ranking-stat">
            <span>Performance</span>
            <strong>96%</strong>
          </div>

          <div className="ranking-stat">
            <span>Attendance</span>
            <strong>94%</strong>
          </div>

        </div>


        {/* Player 2 */}
        <div className="ranking-player">

          <div className="ranking-number">
            02
          </div>

          <div className="ranking-avatar">
            R
          </div>

          <div className="ranking-info">
            <h3>Rahul Verma</h3>
            <p>🏏 Cricket • Batsman</p>
          </div>

          <div className="ranking-stat">
            <span>Performance</span>
            <strong>92%</strong>
          </div>

          <div className="ranking-stat">
            <span>Attendance</span>
            <strong>91%</strong>
          </div>

        </div>


        {/* Player 3 */}
        <div className="ranking-player">

          <div className="ranking-number">
            03
          </div>

          <div className="ranking-avatar">
            A
          </div>

          <div className="ranking-info">
            <h3>Aman Singh</h3>
            <p>🏀 Basketball • Guard</p>
          </div>

          <div className="ranking-stat">
            <span>Performance</span>
            <strong>89%</strong>
          </div>

          <div className="ranking-stat">
            <span>Attendance</span>
            <strong>88%</strong>
          </div>

        </div>


        {/* Player 4 */}
        <div className="ranking-player">

          <div className="ranking-number">
            04
          </div>

          <div className="ranking-avatar">
            V
          </div>

          <div className="ranking-info">
            <h3>Vikash Kumar</h3>
            <p>🏃 Athletics • Sprinter</p>
          </div>

          <div className="ranking-stat">
            <span>Performance</span>
            <strong>86%</strong>
          </div>

          <div className="ranking-stat">
            <span>Attendance</span>
            <strong>95%</strong>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Analytics;