// ========================================
// SportsSync - About Page
// College Sports Management & Analytics
// ========================================

function About() {
  return (
    <main className="about-page">

      {/* ========================================
          About Header
      ======================================== */}
      <section className="about-hero">

        <span className="section-tag">
          ABOUT SPORTSSYNC
        </span>

        <h1>
          Smarter Sports Management.
          <br />
          Better Player Performance.
        </h1>

        <p>
          SportsSync is a college sports management and player
          performance analytics system designed to help colleges
          manage players, teams, tournaments, matches and
          performance data from one centralized platform.
        </p>

      </section>


      {/* ========================================
          Project Overview
      ======================================== */}
      <section className="about-overview">

        <div className="about-overview-card">

          <div className="about-icon">
            🏆
          </div>

          <h2>
            Centralized Sports Management
          </h2>

          <p>
            Manage player profiles, teams, tournaments,
            matches, attendance and sports records from
            a single system.
          </p>

        </div>


        <div className="about-overview-card">

          <div className="about-icon">
            📊
          </div>

          <h2>
            Performance Analytics
          </h2>

          <p>
            Analyze player and team performance using
            match statistics, attendance and historical
            performance data.
          </p>

        </div>


        <div className="about-overview-card">

          <div className="about-icon">
            🎯
          </div>

          <h2>
            Data-Based Selection
          </h2>

          <p>
            Help coaches and sports administrators make
            player ranking and selection decisions using
            performance-based information.
          </p>

        </div>

      </section>


      {/* ========================================
          How SportsSync Works
      ======================================== */}
      <section className="about-workflow">

        <div className="about-section-heading">

          <span className="section-tag">
            HOW IT WORKS
          </span>

          <h2>
            From Player Data to Performance Insights
          </h2>

          <p>
            SportsSync brings important sports information
            together and converts it into useful insights.
          </p>

        </div>


        <div className="workflow-grid">

          {/* Step 01 */}
          <div className="workflow-card">

            <span className="workflow-number">
              01
            </span>

            <div className="workflow-icon">
              👤
            </div>

            <h3>
              Add Players
            </h3>

            <p>
              Create player profiles containing sports,
              team and participation information.
            </p>

          </div>


          {/* Step 02 */}
          <div className="workflow-card">

            <span className="workflow-number">
              02
            </span>

            <div className="workflow-icon">
              🏅
            </div>

            <h3>
              Manage Teams
            </h3>

            <p>
              Organize players into teams and maintain
              team-related sports information.
            </p>

          </div>


          {/* Step 03 */}
          <div className="workflow-card">

            <span className="workflow-number">
              03
            </span>

            <div className="workflow-icon">
              📅
            </div>

            <h3>
              Track Matches
            </h3>

            <p>
              Record tournaments, fixtures, match scores
              and participation details.
            </p>

          </div>


          {/* Step 04 */}
          <div className="workflow-card">

            <span className="workflow-number">
              04
            </span>

            <div className="workflow-icon">
              📈
            </div>

            <h3>
              Analyze Performance
            </h3>

            <p>
              Convert collected sports data into player
              performance and ranking insights.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          Target Users
      ======================================== */}
      <section className="about-users">

        <div className="about-section-heading">

          <span className="section-tag">
            WHO CAN USE IT
          </span>

          <h2>
            Built for the College Sports Community
          </h2>

        </div>


        <div className="users-grid">

          <div className="user-card">
            <span>🏃</span>
            <h3>Students & Players</h3>
            <p>
              Track personal performance, attendance
              and sports participation.
            </p>
          </div>

          <div className="user-card">
            <span>👨‍🏫</span>
            <h3>Coaches</h3>
            <p>
              Monitor players and use performance
              information for team decisions.
            </p>
          </div>

          <div className="user-card">
            <span>📋</span>
            <h3>Sports Faculty</h3>
            <p>
              Manage sports activities, matches,
              teams and player records.
            </p>
          </div>

          <div className="user-card">
            <span>🏛️</span>
            <h3>Sports Administration</h3>
            <p>
              Maintain centralized sports information
              and monitor overall activities.
            </p>
          </div>

        </div>

      </section>


      {/* ========================================
          Technology Stack
      ======================================== */}
      <section className="about-technology">

        <div className="about-section-heading">

          <span className="section-tag">
            TECHNOLOGY
          </span>

          <h2>
            Technology Behind SportsSync
          </h2>

        </div>


        <div className="technology-grid">

          <div className="technology-card">
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div className="technology-card">
            <strong>CSS</strong>
            <span>UI Design</span>
          </div>

          <div className="technology-card">
            <strong>Django</strong>
            <span>Backend</span>
          </div>

          <div className="technology-card">
            <strong>MySQL</strong>
            <span>Database</span>
          </div>

          <div className="technology-card">
            <strong>Chart.js</strong>
            <span>Analytics</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;