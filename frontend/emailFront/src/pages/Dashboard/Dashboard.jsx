import React, { useState } from "react";
import { Link } from "react-router-dom";
import Clients from "../Clients/Clients";
import "./Dashboard.css";

const Dashboard = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [page, setPage] = useState("dashboard");

  const recentActivity = [
    {
      id: 1,
      initials: "AC",
      name: "Acme Corporation",
      dateSent: "Oct 24, 2023 10:45 AM",
      model: "GPT-4 Turbo",
    },
    {
      id: 2,
      initials: "GI",
      name: "Global Industries",
      dateSent: "Oct 24, 2023 09:12 AM",
      model: "Claude 3 Opus",
    },
    {
      id: 3,
      initials: "TS",
      name: "Tech Solutions Ltd",
      dateSent: "Oct 23, 2023 04:30 PM",
      model: "Llama 3",
    },
    {
      id: 4,
      initials: "SV",
      name: "Stellar Ventures",
      dateSent: "Oct 23, 2023 02:15 PM",
      model: "GPT-4 Turbo",
    },
    {
      id: 5,
      initials: "BN",
      name: "Bright Network",
      dateSent: "Oct 23, 2023 11:00 AM",
      model: "Gemini 1.5 Pro",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Total Sent</span>
              <div className="stat-icon blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="stat-value">24,512</div>
            <div className="stat-change positive">+12.5%</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Open Rate</span>
              <div className="stat-icon blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="stat-value">68.2%</div>
            <div className="stat-change positive">+2.1%</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Active Models</span>
              <div className="stat-icon blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="stat-value">6</div>
            <div className="stat-badge">Stable</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Cost Savings</span>
              <div className="stat-icon blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="stat-value">$1,240</div>
            <div className="stat-badge">This Month</div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="activity-section">
          <div className="activity-header">
            <h2>Recent Activity</h2>
          </div>

          <div className="activity-table-container">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>CLIENT NAME</th>
                  <th>DATE SENT</th>
                  <th>AI MODEL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="client-cell">
                        <div className="client-avatar">{item.initials}</div>
                        <span className="client-name">{item.name}</span>
                      </div>
                    </td>
                    <td className="date-cell">{item.dateSent}</td>
                    <td className="model-cell">{item.model}</td>
                    <td>
                      <button className="action-button">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z"
                            stroke="#6B7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 5.00001C10.4602 5.00001 10.8333 4.62691 10.8333 4.16667C10.8333 3.70644 10.4602 3.33334 10 3.33334C9.53976 3.33334 9.16667 3.70644 9.16667 4.16667C9.16667 4.62691 9.53976 5.00001 10 5.00001Z"
                            stroke="#6B7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 10 15C9.53976 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53976 16.6667 10 16.6667Z"
                            stroke="#6B7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span className="table-info">Showing 5 of 1,284 entries</span>
            <div className="pagination">
              <button className="pagination-btn">Previous</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
