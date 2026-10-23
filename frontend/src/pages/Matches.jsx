// ========================================
// SportsSync - Matches & Score Management
// ========================================

import { useState } from "react";

function Matches() {

  // ========================================
  // Match Data
  // Later this data will come from Django API
  // ========================================
  const matches = [
    {
      id: 1,
      sport: "Football",
      homeTeam: "Football Team",
      awayTeam: "College United",
      date: "18 Oct 2026",
      time: "4:00 PM",
      venue: "College Ground",
      status: "Upcoming",
      homeScore: "-",
      awayScore: "-",
    },
    {
      id: 2,
      sport: "Cricket",
      homeTeam: "Cricket Team",
      awayTeam: "Campus XI",
      date: "20 Oct 2026",
      time: "10:00 AM",
      venue: "College Cricket Ground",
      status: "Upcoming",
      homeScore: "-",
      awayScore: "-",
    },
    {
      id: 3,
      sport: "Basketball",
      homeTeam: "Basketball Team",
      awayTeam: "Warriors",
      date: "22 Oct 2026",
      time: "3:30 PM",
      venue: "Indoor Sports Hall",
      status: "Live",
      homeScore: "68",
      awayScore: "61",
    },
    {
      id: 4,
      sport: "Volleyball",
      homeTeam: "Volleyball Team",
      awayTeam: "Spikers",
      date: "12 Oct 2026",
      time: "5:00 PM",
      venue: "Main Sports Court",
      status: "Completed",
      homeScore: "3",
      awayScore: "1",
    },
    {
      id: 5,
      sport: "Badminton",
      homeTeam: "Badminton Team",
      awayTeam: "Smashers",
      date: "10 Oct 2026",
      time: "2:00 PM",
      venue: "Indoor Hall",
      status: "Completed",
      homeScore: "2",
      awayScore: "0",
    },
    {
      id: 6,
      sport: "Football",
      homeTeam: "College United",
      awayTeam: "Football Team",
      date: "25 Oct 2026",
      time: "4:30 PM",
      venue: "College Ground",
      status: "Upcoming",
      homeScore: "-",
      awayScore: "-",
    },
  ];

  // ========================================
  // Search & Filter State
  // ========================================
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("All Sports");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // ========================================
  // Filter Matches
  // ========================================
  const filteredMatches = matches.filter((match) => {

    const matchesSearch =
      match.homeTeam
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      match.awayTeam
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSport =
      sportFilter === "All Sports" ||
      match.sport === sportFilter;

    const matchesStatus =
      statusFilter === "All Status" ||
      match.status === statusFilter;

    return (
      matchesSearch &&
      matchesSport &&
      matchesStatus
    );
  });

  return (
    <main className="matches-page">

      {/* ========================================
          PAGE HEADER
          ======================================== */}
      <section className="matches-header">

        <div>
          <p className="section-tag">
            MATCH & SCORE MANAGEMENT
          </p>

          <h1>Matches & Scores</h1>

          <p className="matches-description">
            Manage match schedules, live scores,
            results and upcoming college sports
            competitions from one place.
          </p>
        </div>

        {/* Add Match Button */}
        <button className="add-match-btn">
          + Add Match
        </button>

      </section>


      {/* ========================================
          SEARCH & FILTER
          ======================================== */}
      <section className="match-tools">

        <input
          type="text"
          placeholder="🔍 Search team..."
          className="match-search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          className="match-filter"
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
          <option>Badminton</option>
        </select>

        <select
          className="match-filter"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >
          <option>All Status</option>
          <option>Upcoming</option>
          <option>Live</option>
          <option>Completed</option>
        </select>

      </section>


      {/* ========================================
          MATCH SUMMARY
          ======================================== */}
      <section className="match-summary">

        <div className="match-summary-card">
          <span>📅</span>
          <h2>24</h2>
          <p>Total Matches</p>
        </div>

        <div className="match-summary-card">
          <span>🟢</span>
          <h2>12</h2>
          <p>Upcoming</p>
        </div>

        <div className="match-summary-card">
          <span>🔴</span>
          <h2>2</h2>
          <p>Live Matches</p>
        </div>

        <div className="match-summary-card">
          <span>🏆</span>
          <h2>10</h2>
          <p>Completed</p>
        </div>

      </section>


      {/* ========================================
          MATCH LIST
          ======================================== */}
      <section className="matches-list">

        {filteredMatches.map((match) => (

          <div
            className="match-card-modern"
            key={match.id}
          >

            {/* Match Top Information */}
            <div className="match-card-top">

              <span className="match-sport">
                {match.sport}
              </span>

              <span
                className={`match-status ${match.status.toLowerCase()}`}
              >
                ● {match.status}
              </span>

            </div>


            {/* Teams & Score */}
            <div className="match-versus">

              <div className="match-team">

                <div className="match-team-icon">
                  🛡️
                </div>

                <h3>{match.homeTeam}</h3>

                <span>Home</span>

              </div>


              <div className="match-score">

                <strong>
                  {match.homeScore}
                </strong>

                <span>VS</span>

                <strong>
                  {match.awayScore}
                </strong>

              </div>


              <div className="match-team">

                <div className="match-team-icon">
                  🛡️
                </div>

                <h3>{match.awayTeam}</h3>

                <span>Away</span>

              </div>

            </div>


            {/* Match Details */}
            <div className="match-details">

              <div>
                <span>📅 Date</span>
                <strong>{match.date}</strong>
              </div>

              <div>
                <span>🕐 Time</span>
                <strong>{match.time}</strong>
              </div>

              <div>
                <span>📍 Venue</span>
                <strong>{match.venue}</strong>
              </div>

            </div>


            {/* Match Action */}
            <button className="match-view-btn">
              View Match Details →
            </button>

          </div>

        ))}


        {/* No Results */}
        {filteredMatches.length === 0 && (

          <div className="no-matches">

            <h3>No matches found</h3>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Matches;