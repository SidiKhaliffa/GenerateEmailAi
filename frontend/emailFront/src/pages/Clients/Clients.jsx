import React, { useState, useEffect } from "react";
import "./Clients.css";
import { Link } from "react-router-dom";

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [clients, setClients] = useState([]);
  const [totalClients, setTotalClients] = useState(0);

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    const first = words[0]?.charAt(0).toUpperCase() || "";
    const second = words[1]?.charAt(0).toUpperCase() || "";
    return first + second;
  };

  const handleOpenModal = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/clients", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch clients");
        }
        setClients(data);
        setTotalClients(data.length); // Set total clients count
      } catch (error) {
        console.error("Error fetching clients:", error);
        alert("An error occurred while fetching clients. Please try again.");
      }
    };

    fetchClients();
  }, []);

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewClient({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateClient = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !newClient.name ||
      !newClient.company ||
      !newClient.email ||
      !newClient.phone
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newClient),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create client");
      } else {
        setNewClient({
          name: "",
          company: "",
          email: "",
          phone: "",
        });
        console.log("Client created:", data);
        setClients((prevClients) => [...prevClients, data]);
        setTotalClients((prevTotal) => prevTotal + 1); // Increment total count
        alert("Client created successfully!");
        handleCloseModal();
      }
    } catch (error) {
      console.error("Error creating client:", error);
      alert("An error occurred while creating the client. Please try again.");
    }
    // Here you would typically send the data to your backend
    console.log("Creating new client:", newClient);
  };

  // Calculate total pages (assuming items per page is clients.length or a fixed number)
  const itemsPerPage = 10; // You can adjust this
  const totalPages = Math.ceil(totalClients / itemsPerPage);

  // Get current page clients
  const indexOfLastClient = currentPage * itemsPerPage;
  const indexOfFirstClient = indexOfLastClient - itemsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  // Calculate showing range
  const showingFrom = totalClients === 0 ? 0 : indexOfFirstClient + 1;
  const showingTo = Math.min(indexOfLastClient, totalClients);

  return (
    <div className="client-directory-container">
      {/* Main Content */}
      <main className="client-main">
        <div className="client-header">
          <div>
            <h1>Client Directory</h1>
            <p>
              Manage and monitor your client relationships and communication
              metrics.
            </p>
          </div>
          <div className="header-actions">
            <button className="export-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.5 13.9524C18.3651 13.4303 19.0064 12.5945 19.2945 11.6089C19.5826 10.6233 19.4971 9.56072 19.0553 8.6344C18.6135 7.70808 17.8475 6.98632 16.9089 6.61213C15.9703 6.23794 14.9282 6.23906 13.99 6.61528C13.6161 5.02617 12.6583 3.63458 11.307 2.72101C9.95579 1.80744 8.31015 1.43761 6.67513 1.68294C5.04011 1.92827 3.55821 2.77378 2.50919 4.06544C1.46017 5.3571 0.919281 6.9997 1.00016 8.67953C1.00016 8.67953 1.00016 8.67953 1.00016 8.67953V8.67953C0.246211 9.01864 -0.336651 9.66428 -0.666764 10.4649C-0.996877 11.2655 -0.999934 12.1602 -0.675238 12.963C-0.350542 13.7658 0.226464 14.4159 0.977914 14.7609C1.72937 15.1059 2.58964 15.1162 3.34883 14.7897"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Export
            </button>
            <button className="add-client-btn" onClick={handleOpenModal}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11.6667C6.77834 11.6667 4.16667 14.2783 4.16667 17.5H15.8333C15.8333 14.2783 13.2217 11.6667 10 11.6667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add New Client
            </button>
          </div>
        </div>

        {/* Client Table */}
        <div className="client-table-section">
          <div className="client-table-container">
            <table className="client-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>COMPANY</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentClients.length > 0 ? (
                  currentClients.map((client) => (
                    <tr key={client._id}>
                      <td>
                        <div className="name-cell">
                          <div
                            className="client-avatar"
                            style={{
                              backgroundColor: [
                                "#DBEAFE",
                                "#DCFCE7",
                                "#FEF3C7",
                                "#FCE7F3",
                                "#E0E7FF",
                              ][client.id % 5],
                            }}
                          >
                            {getInitials(client.name)}
                          </div>
                          <span className="client-name">{client.name}</span>
                        </div>
                      </td>
                      <td className="company-cell">{client.company}</td>
                      <td className="email-cell">{client.email}</td>
                      <td>
                        <div className="emails-cell">
                          <span className="emails-count">{client.phone}</span>
                        </div>
                      </td>
                      <td>
                        <Link
                          to="/generate-ai"
                          state={{ client }}
                          className="view-details-btn"
                        >
                          Generate AI
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="#2563EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center", padding: "2rem", color: "#6B7280" }}>
                      No clients found. Click "Add New Client" to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span className="table-info">
              Showing {showingFrom} to {showingTo} of {totalClients} clients
            </span>
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dynamic page numbers */}
              {totalPages <= 5 ? (
                // Show all pages if total is 5 or less
                Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))
              ) : (
                // Show smart pagination for more than 5 pages
                <>
                  {currentPage > 2 && (
                    <button
                      className="page-number"
                      onClick={() => setCurrentPage(1)}
                    >
                      1
                    </button>
                  )}
                  
                  {currentPage > 3 && <span className="pagination-dots">...</span>}
                  
                  {currentPage > 1 && (
                    <button
                      className="page-number"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      {currentPage - 1}
                    </button>
                  )}
                  
                  <button className="page-number active">
                    {currentPage}
                  </button>
                  
                  {currentPage < totalPages && (
                    <button
                      className="page-number"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      {currentPage + 1}
                    </button>
                  )}
                  
                  {currentPage < totalPages - 2 && <span className="pagination-dots">...</span>}
                  
                  {currentPage < totalPages - 1 && (
                    <button
                      className="page-number"
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      {totalPages}
                    </button>
                  )}
                </>
              )}

              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Client</h2>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <form className="modal-body" onSubmit={handleCreateClient}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. sidi"
                  value={newClient.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g. Tech Solutions Inc."
                  value={newClient.company}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. sidi.khalifa@company.com"
                  value={newClient.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +1 (555) 123-4567"
                  value={newClient.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-create">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.16667V15.8333M4.16667 10H15.8333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Create Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;