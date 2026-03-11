import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../pages/Dashboard/Dashboard.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleDisconnect = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="brand">
            <div className="brand-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#2563EB" />
                <path d="M12 6L8 12H12L12 18L16 12H12L12 6Z" fill="white" />
              </svg>
            </div>
            <span className="brand-name">EmailAI</span>
          </div>
          <div className="nav-menu">
            <Link
              to="/dashboard"
              className={`nav-item ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/clients"
              className={`nav-item ${
                location.pathname === "/clients" ? "active" : ""
              }`}
            >
              Clients
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <div>
            <button onClick={handleDisconnect} className="disconnect-btn">
              Disconnect
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
