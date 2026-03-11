import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('John Doe');
  const [viewMode, setViewMode] = useState('grid');

  const searchResults = [
    {
      id: 1,
      initials: 'JD',
      name: 'Johnathan Doe',
      title: 'CEO at TechVision Inc.',
      email: 'john.doe@techvision.com',
      location: 'San Francisco, CA',
      tags: ['Enterprise', 'SaaS'],
      status: 'Active',
      statusColor: '#10B981'
    },
    {
      id: 2,
      initials: 'JD',
      name: 'Johnny Doe',
      title: 'Founder of Doe & Co.',
      email: 'j.doe@doeandco.net',
      location: 'Austin, TX',
      tags: ['Startup', 'Consulting'],
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 3,
      initials: 'JD',
      name: 'John Doe Smith',
      title: 'Marketing Lead at Nexus',
      email: 'smith.john@nexus.org',
      location: 'London, UK',
      tags: ['Agency'],
      status: 'Inactive',
      statusColor: '#6B7280'
    }
  ];

  return (
    <div className="search-results-container">
      {/* Navigation Bar */}
      <nav className="search-nav">
        <div className="nav-left">
          <div className="brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L21 6M8 12L21 12M8 18L21 18M3 6H3.01M3 12H3.01M3 18H3.01" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <rect width="24" height="24" rx="6" fill="#2563EB"/>
                <path d="M8 6L21 6M8 12L21 12M8 18L21 18M3 6H3.01M3 12H3.01M3 18H3.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="brand-name">ClientFinder</span>
          </div>
        </div>
        <div className="nav-center">
          <div className="main-search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="clear-search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-right">
          <button className="icon-button notification">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42113 18.2537 9.16814 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-badge">1</span>
          </button>
          <button className="icon-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.83333V10L12.5 11.6667M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="avatar">
            <div className="avatar-placeholder"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="search-main">
        <div className="breadcrumb">
          <a href="#dashboard">Dashboard</a>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Search Results</span>
        </div>

        <div className="results-header">
          <div>
            <h1>Search Results for "{searchQuery}"</h1>
            <p>We found {searchResults.length} matching clients in your database.</p>
          </div>
          <div className="view-controls">
            <button className="filters-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5.83333H17.5M5 10H15M7.5 14.1667H12.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filters
            </button>
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33333 3.33333H8.33333V8.33333H3.33333V3.33333ZM11.6667 3.33333H16.6667V8.33333H11.6667V3.33333ZM11.6667 11.6667H16.6667V16.6667H11.6667V11.6667ZM3.33333 11.6667H8.33333V16.6667H3.33333V11.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33333 5H16.6667M3.33333 10H16.6667M3.33333 15H16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="results-grid">
          {searchResults.map((result) => (
            <div key={result.id} className="result-card">
              <div className="card-header">
                <div className="client-info">
                  <div className="client-avatar-large" style={{
                    backgroundColor: ['#FED7AA', '#DBEAFE', '#E9D5FF'][result.id % 3]
                  }}>
                    <span>{result.initials}</span>
                  </div>
                  <div className="client-details">
                    <h3>{result.name}</h3>
                    <p>{result.title}</p>
                  </div>
                </div>
                <span className="status-badge" style={{ backgroundColor: `${result.statusColor}15`, color: result.statusColor }}>
                  {result.status}
                </span>
              </div>

              <div className="card-body">
                <div className="info-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5.33333L7.27042 8.84032C7.70827 9.13888 8.29173 9.13888 8.72958 8.84032L14 5.33333M3.33333 12.6667H12.6667C13.403 12.6667 14 12.0697 14 11.3333V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V11.3333C2 12.0697 2.59695 12.6667 3.33333 12.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{result.email}</span>
                </div>
                <div className="info-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.66667C9.47276 8.66667 10.6667 7.47276 10.6667 6C10.6667 4.52724 9.47276 3.33333 8 3.33333C6.52724 3.33333 5.33333 4.52724 5.33333 6C5.33333 7.47276 6.52724 8.66667 8 8.66667ZM8 8.66667C5.79086 8.66667 4 10.4575 4 12.6667M8 8.66667C10.2091 8.66667 12 10.4575 12 12.6667M14 6C14 10.4183 10.4183 14 6 14C1.58172 14 -2 10.4183 -2 6C-2 1.58172 1.58172 -2 6 -2C10.4183 -2 14 1.58172 14 6Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{result.location}</span>
                </div>
                <div className="tags">
                  {result.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <button className="profile-btn">
                  Go to Profile
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#F3F4F6"/>
              <path d="M40 28C45.5228 28 50 32.4772 50 38C50 43.5228 45.5228 48 40 48C34.4772 48 30 43.5228 30 38C30 32.4772 34.4772 28 40 28ZM40 30C35.5817 30 32 33.5817 32 38C32 42.4183 35.5817 46 40 46C44.4183 46 48 42.4183 48 38C48 33.5817 44.4183 30 40 30ZM52 50L48 46L46 48L50 52L52 50Z" fill="#9CA3AF"/>
            </svg>
          </div>
          <h3>Looking for someone else?</h3>
          <p>Try searching for their company name, specialized tags, or their primary location if "John Doe" isn't what you needed.</p>
          <div className="empty-actions">
            <button className="clear-btn">Clear Search</button>
            <button className="invite-btn">Invite New Client</button>
          </div>
        </div>

        <div className="results-footer">
          <span className="results-info">Showing 1 to 3 of 3 results</span>
          <div className="pagination">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default SearchResults;
