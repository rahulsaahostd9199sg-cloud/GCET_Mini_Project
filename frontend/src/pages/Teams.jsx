// ========================================
// SportsSync - Teams Management Page
// ========================================

import { useState } from "react";
import { Link } from "react-router-dom";

function Teams() {

  // ========================================
  // Team Data
  // Later this data will come from Django API
  // ========================================
  const teams = [
    {
      id: 1,
      name: "Football Team",
      sport: "Football",
      icon: "⚽",
      players: 24,
      matches: 18,
      performance: 92,
      status: "Active",
    },
    {
      id: 2,
      name: "Cricket Team",
      sport: "Cricket",
      icon: "🏏",
      players: 18,
      matches: 16,
      performance: 89,
      status: "Active",
    },
    {
      id: 3,
      name: "Basketball Team",
      sport: "Basketball",
      icon: "🏀",
      players: 12,
      matches: 15,
      performance: 86,
      status: "Active",
    },
    {
      id: 4,
      name: "Volleyball Team",
      sport: "Volleyball",
      icon: "🏐",
      players: 14,
      matches: 14,
      performance: 84,
      status: "Active",
    },
    {
      id: 5,
      name: "Athletics Team",
      sport: "Athletics",
      icon: "🏃",
      players: 20,
      matches: 12,
      performance: 88,
      status: "Active",
    },
    {
      id: 6,
      name: "Badminton Team",
      sport: "Badminton",
      icon: "🏸",
      players: 10,
      matches: 13,
      performance: 81,
      status: "Active",
    },
  ];

  // ========================================
  // Search & Filter State
  // ========================================
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("All Sports");

  // ========================================
  // Filter Teams
  // ========================================
  const filteredTeams = teams.filter((team) => {

    const matchesSearch = team.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSport =
      sportFilter === "All Sports" ||
      team.sport === sportFilter;

    return matchesSearch && matchesSport;
  });

  return (
    <main className="teams-page">

      {/* ========================================
          PAGE HEADER
          ======================================== */}
      <section className="teams-header">

        <div>
          <p className="section-tag">
            TEAM MANAGEMENT
          </p>

          <h1>College Teams</h1>

          <p className="teams-description">
            Manage college sports teams, players,
            matches and overall team performance
            from one place.
          </p>
        </div>

        {/* Add Team Button */}
        <button className="add-team-btn">
          + Add Team
        </button>

      </section>


      {/* ========================================
          SEARCH & FILTER
          ======================================== */}
      <section className="team-tools">

        <input
          type="text"
          placeholder="🔍 Search team..."
          className="team-search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          className="team-filter"
          value={sportFilter}
          onChange={(event) =>
            setSportFilter(event.target.value)
          }
        >
          <option>All Sports</option>
          <option>Football</option>
          <option>Cricket</option>
          <option>Basketball</option>
          <option>Volleyball</option>
          <option>Athletics</option>
          <option>Badminton</option>
        </select>

      </section>


      {/* ========================================
          TEAM SUMMARY
          ======================================== */}
      <section className="team-summary">

        <div className="team-summary-card">
          <span>👥</span>
          <h2>12</h2>
          <p>Total Teams</p>
        </div>

        <div className="team-summary-card">
          <span>🏆</span>
          <h2>98%</h2>
          <p>Active Teams</p>
        </div>

        <div className="team-summary-card">
          <span>👤</span>
          <h2>500+</h2>
          <p>Total Players</p>
        </div>

        <div className="team-summary-card">
          <span>📊</span>
          <h2>87%</h2>
          <p>Avg Performance</p>
        </div>

      </section>


      {/* ========================================
          TEAM CARDS
          ======================================== */}
      <section className="teams-grid">

        {filteredTeams.map((team) => (

          <div
            className="team-card-modern"
            key={team.id}
          >

            {/* Team Icon */}
            <div className="team-icon">
              {team.icon}
            </div>

            {/* Team Information */}
            <div className="team-card-info">

              <span className="team-status">
                ● {team.status}
              </span>

              <h2>{team.name}</h2>

              <p>{team.sport}</p>

            </div>


            {/* Team Performance */}
            <div className="team-performance">

              <div className="team-performance-header">
                <span>Performance</span>

                <strong>
                  {team.performance}%
                </strong>
              </div>

              <div className="team-progress">
                <div
                  className="team-progress-fill"
                  style={{
                    width: `${team.performance}%`,
                  }}
                ></div>
              </div>

            </div>


            {/* Team Stats */}
            <div className="team-stats">

              <div>
                <strong>{team.players}</strong>
                <span>Players</span>
              </div>

              <div>
                <strong>{team.matches}</strong>
                <span>Matches</span>
              </div>

            </div>


            {/* View Team Button */}
            <Link
              to="/teams"
              className="view-team-btn"
            >
              View Team →
            </Link>

          </div>

        ))}


        {/* No Results */}
        {filteredTeams.length === 0 && (

          <div className="no-teams">
            <h3>No teams found</h3>

            <p>
              Try changing your search or filter.
            </p>
          </div>

        )}

      </section>

    </main>
  );
}

export default Teams;