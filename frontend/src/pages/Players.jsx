// ========================================
// React Router - Navigation
// ========================================
import { Link } from "react-router-dom";
// ========================================
// React Hooks
// ========================================
import { useState } from "react";
// ========================================
// SportsSync - Players Page
// ========================================

function Players() {
  // ----------------------------------------
  // Temporary player data
  // Later this data will come from Django API
  // ----------------------------------------
// ========================================
// Filter States
// ========================================

// Search box ki value
const [search, setSearch] = useState("");

// Selected sport
const [sportFilter, setSportFilter] = useState("All Sports");

// Selected performance range
const [performanceFilter, setPerformanceFilter] =
  useState("Performance");

  const players = [
    {
      id: 1,
      name: "Arjun Sharma",
      sport: "Football",
      position: "Forward",
      performance: 96,
      attendance: 94,
      matches: 18,
    },
    {
      id: 2,
      name: "Rahul Verma",
      sport: "Cricket",
      position: "Batsman",
      performance: 92,
      attendance: 91,
      matches: 16,
    },
    {
      id: 3,
      name: "Aman Singh",
      sport: "Basketball",
      position: "Guard",
      performance: 89,
      attendance: 88,
      matches: 15,
    },
    {
      id: 4,
      name: "Vikash Kumar",
      sport: "Athletics",
      position: "Sprinter",
      performance: 86,
      attendance: 95,
      matches: 12,
    },
    {
      id: 5,
      name: "Rohit Yadav",
      sport: "Volleyball",
      position: "Setter",
      performance: 84,
      attendance: 87,
      matches: 14,
    },
    {
      id: 6,
      name: "Aditya Singh",
      sport: "Badminton",
      position: "Singles",
      performance: 81,
      attendance: 90,
      matches: 13,
    },
  ];

  // ========================================
// Filter Players
// ========================================

const filteredPlayers = players.filter((player) => {

  // Search player by name
  const matchesSearch = player.name
    .toLowerCase()
    .includes(search.toLowerCase());

  // Filter by sport
  const matchesSport =
    sportFilter === "All Sports" ||
    player.sport === sportFilter;

  // Filter by performance
  let matchesPerformance = true;

  if (performanceFilter === "90% & Above") {
    matchesPerformance = player.performance >= 90;
  }

  if (performanceFilter === "80% - 90%") {
    matchesPerformance =
      player.performance >= 80 &&
      player.performance < 90;
  }

  if (performanceFilter === "Below 80%") {
    matchesPerformance = player.performance < 80;
  }

  // Player must satisfy all selected filters
  return (
    matchesSearch &&
    matchesSport &&
    matchesPerformance
  );
});

  return (
    <main className="players-page">

      {/* ========================================
          PAGE HEADER
          ======================================== */}
      <section className="players-header">

        <div>
          {/* Small Section Label */}
          <p className="section-tag">
            PLAYER MANAGEMENT
          </p>

          {/* Main Heading */}
          <h1>
            College <span>Players</span>
          </h1>

          {/* Description */}
          <p className="players-description">
            Manage player profiles, sports information,
            performance statistics and attendance from
            one centralized platform.
          </p>
        </div>

        {/* Add Player Button */}
        <button className="add-player-btn">
          + Add Player
        </button>

      </section>

      {/* ========================================
          SEARCH & FILTER BAR
          ======================================== */}
      <section className="player-tools">

       {/* Search Player */}
<input
  type="text"
  placeholder="🔍 Search player..."
  className="player-search"
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>

        {/* Sport Filter */}
<select
  className="player-filter"
  value={sportFilter}
  onChange={(event) => setSportFilter(event.target.value)}
>
  <option>All Sports</option>
  <option>Football</option>
  <option>Cricket</option>
  <option>Basketball</option>
  <option>Athletics</option>
  <option>Volleyball</option>
  <option>Badminton</option>
</select>

{/* Performance Filter */}
<select
  className="player-filter"
  value={performanceFilter}
  onChange={(event) =>
    setPerformanceFilter(event.target.value)
  }
>
  <option>Performance</option>
  <option>90% & Above</option>
  <option>80% - 90%</option>
  <option>Below 80%</option>
</select>

      </section>

      {/* ========================================
          PLAYER STATISTICS
          ======================================== */}
      <section className="player-summary">

        <div className="summary-card">
          <span>👥</span>
          <div>
            <h3>500+</h3>
            <p>Total Players</p>
          </div>
        </div>

        <div className="summary-card">
          <span>🏆</span>
          <div>
            <h3>86%</h3>
            <p>Avg Performance</p>
          </div>
        </div>

        <div className="summary-card">
          <span>📅</span>
          <div>
            <h3>92%</h3>
            <p>Avg Attendance</p>
          </div>
        </div>

        <div className="summary-card">
          <span>⚽</span>
          <div>
            <h3>12</h3>
            <p>Sports</p>
          </div>
        </div>

      </section>

      {/* ========================================
          PLAYER CARDS
          ======================================== */}
      <section className="players-grid">

        {filteredPlayers.map((player) => (
          <article
            className="player-card"
            key={player.id}
          >

            {/* Player Avatar */}
            <div className="player-avatar">
              {player.name.charAt(0)}
            </div>

            {/* Player Information */}
            <div className="player-info">

              <h2>{player.name}</h2>

              <p className="player-sport">
                {player.sport} • {player.position}
              </p>

            </div>

            {/* Performance */}
            <div className="player-metric">

              <div className="metric-header">
                <span>Performance</span>
                <strong>{player.performance}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${player.performance}%`,
                  }}
                ></div>
              </div>

            </div>

            {/* Player Details */}
            <div className="player-details">

              <div>
                <strong>{player.attendance}%</strong>
                <span>Attendance</span>
              </div>

              <div>
                <strong>{player.matches}</strong>
                <span>Matches</span>
              </div>

            </div>

            {/* ========================================
    View Player Profile Button
    ======================================== */}
<Link
  to="/players/profile"
  className="view-player-btn"
>
  View Profile →
</Link>

          </article>
        ))}

        {/* ========================================
    No Results Message
    ======================================== */}

{filteredPlayers.length === 0 && (
  <div className="no-players">
    <h3>No players found</h3>
    <p>
      Try changing your search or filter.
    </p>
  </div>
)}

      </section>

    </main>
  );
}

export default Players;