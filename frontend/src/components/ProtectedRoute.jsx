// ========================================
// SportsSync - Protected Route
// ========================================

import { Navigate } from "react-router-dom";

// ========================================
// ProtectedRoute Component
//
// Login nahi hone par user ko Login page
// par redirect karega.
//
// requiredRole diya ho to ye bhi check karega
// ki user ke paas required role hai ya nahi.
// ========================================

function ProtectedRoute({ children, requiredRole }) {

  // ----------------------------------------
  // Login ke time hum localStorage me
  // "sportsSyncUser" save karenge.
  // ----------------------------------------
  const user = JSON.parse(
    localStorage.getItem("sportsSyncUser")
  );

  // ----------------------------------------
  // User login nahi hai
  // ----------------------------------------
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ----------------------------------------
  // Agar specific role required hai aur
  // logged-in user ka role match nahi karta
  // ----------------------------------------
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ----------------------------------------
  // User authorized hai
  // ----------------------------------------
  return children;
}

export default ProtectedRoute;