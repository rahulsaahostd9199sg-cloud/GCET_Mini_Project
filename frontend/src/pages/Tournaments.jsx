// ========================================
// SportsSync - Tournaments Management Page
// ========================================

import { useState } from "react";

function Tournaments() {

  // ========================================
  // Tournament Data
  // Later this data will come from Django API
  // ========================================
  const tournaments = [
    {
      id: 1,
      name: "Annual Football Championship",
      sport: "Football",
      date: "15 Oct 2026",
      teams: 8,
      matches: 16,
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Inter College Cricket Cup",
      sport: "Cricket",
      date: "22 Oct 2026",
      teams: 10,
      matches: 20,
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Basketball League 2026",
      sport: "Basketball",
      date: "05 Nov 2026",
      teams: 6,
      matches: 12,
      status: "Upcoming",
    },
    {
      id: 4,
      name: "Volleyball Championship",
      sport: "Volleyball",
      date: "12 Nov 2026",
      teams: 8,
      matches: 14,
      status: "Upcoming",
    },
    {
      id: 5,
      name: "Athletics Meet 2026",
      sport: "Athletics",
      date: "20 Nov 2026",
      teams: 12,
      matches: 18,
      status: "Upcoming",
    },
    {
      id: 6,
      name: "Badminton Open",
      sport: "Badminton",
      date: "28 Nov 2026",
      teams: 5,
      matches: 10,
      status: "Upcoming",
    },
  ];

  // ========================================
  // Search & Filter State
  // ========================================
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("All Sports");

  // ========================================
  // Filter Tournaments
  // ========================================
  const filteredTournaments = tournaments.filter((tournament) => {

    const matchesSearch = tournament.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSport =
      sportFilter === "All Sports" ||
      tournament.sport === sportFilter;

    return matchesSearch && matchesSport;
  });

  return (
    <main className="tournaments-page">

      {/* ========================================
          PAGE HEADER
          ======================================== */}
      <section className="tournaments-header">

        <div>
          <p className="section-tag">
            TOURNAMENT MANAGEMENT
          </p>

          <h1>College Tournaments</h1>

          <p className="tournaments-description">
            Manage tournaments, participating teams,
            schedules and match information from one
            centralized platform.
          </p>
        </div>

        {/* Add Tournament Button */}
        <button className="add-tournament-btn">
          + Add Tournament
        </button>

      </section>


      {/* ========================================
          SEARCH & FILTER
          ======================================== */}
      <section className="tournament-tools">

        <input
          type="text"
          placeholder="🔍 Search tournament..."
          className="tournament-search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          className="tournament-filter"
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
          TOURNAMENT SUMMARY
          ======================================== */}
      <section className="tournament-summary">

        <div className="tournament-summary-card">
          <span>🏆</span>
          <h2>12</h2>
          <p>Total Tournaments</p>
        </div>

        <div className="tournament-summary-card">
          <span>📅</span>
          <h2>6</h2>
          <p>Upcoming</p>
        </div>

        <div className="tournament-summary-card">
          <span>👥</span>
          <h2>48</h2>
          <p>Participating Teams</p>
        </div>

        <div className="tournament-summary-card">
          <span>⚽</span>
          <h2>90+</h2>
          <p>Scheduled Matches</p>
        </div>

      </section>


      {/* ========================================
          TOURNAMENT CARDS
          ======================================== */}
      <section className="tournaments-grid">

        {filteredTournaments.map((tournament) => (

          <div
            className="tournament-card-modern"
            key={tournament.id}
          >

            {/* Tournament Icon */}
            <div className="tournament-icon">
              🏆
            </div>

            {/* Tournament Information */}
            <div className="tournament-card-info">

              <span className="tournament-status">
                ● {tournament.status}
              </span>

              <h2>{tournament.name}</h2>

              <p>{tournament.sport}</p>

            </div>


            {/* Tournament Date */}
            <div className="tournament-date">
              <span>📅 Date</span>
              <strong>{tournament.date}</strong>
            </div>


            {/* Tournament Stats */}
            <div className="tournament-stats">

              <div>
                <strong>{tournament.teams}</strong>
                <span>Teams</span>
              </div>

              <div>
                <strong>{tournament.matches}</strong>
                <span>Matches</span>
              </div>

            </div>


            {/* View Tournament Button */}
            <button className="view-tournament-btn">
              View Tournament →
            </button>

          </div>

        ))}


        {/* No Results */}
        {filteredTournaments.length === 0 && (

          <div className="no-tournaments">

            <h3>No tournaments found</h3>

            <p>
              Try changing your search or sport filter.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Tournaments;