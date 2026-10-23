// Administrator Dashboard
import AdminDashboard from "./pages/AdminDashboard";
// Coach Dashboard
import CoachDashboard from "./pages/CoachDashboard";
// Player Dashboard Page
import PlayerDashboard from "./pages/PlayerDashboard";
// Player Profile Page
import PlayerProfile from "./pages/PlayerProfile";
// ========================================
// SportsSync - Main App & Routing
// ========================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar component
import Navbar from "./components/Navbar";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Tournaments from "./pages/Tournaments";
import Matches from "./pages/Matches";
import Analytics from "./pages/Analytics";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    // BrowserRouter enables multiple-page style navigation
    // without refreshing the browser.
    <BrowserRouter>

      {/* Navbar will remain visible on every page */}
      <Navbar />

      {/* All website routes */}
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Players Page */}
        <Route path="/players" element={<Players />} />

{/* Player Profile Page */}
<Route path="/players/profile" element={<PlayerProfile />} />

        {/* Teams Page */}
        <Route path="/teams" element={<Teams />} />

        {/* Tournaments Page */}
        <Route path="/tournaments" element={<Tournaments />} />

        {/* Matches Page */}
        <Route path="/matches" element={<Matches />} />

        {/* Analytics Page */}
        <Route path="/analytics" element={<Analytics />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Player Dashboard */}
<Route
  path="/player-dashboard"
  element={<PlayerDashboard />}
/>

// Coach Dashboard
<Route
  path="/coach-dashboard"
  element={<CoachDashboard />}
/>

{/* Administrator Dashboard */}
<Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;