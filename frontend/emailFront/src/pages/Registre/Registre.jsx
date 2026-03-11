import React, { useState } from "react";
import "./registre.css";
import { Link } from "react-router-dom";

const Registre = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    try {
      console.log("Sign up attempt:", { fullName, email, password });
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });
      if (response.ok) {
        alert("Registration successful! Please log in.");
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
    // Add your sign up logic here
  };

  return (
    <div className="signup-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">
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
            </div>
            <span className="logo-text">AI Email</span>
          </div>
        </div>
      </nav>

      <main className="signup-main">
        <div className="content-wrapper">
          <div className="left-section">
            <div className="beta-badge">Now in Public Beta</div>
            <h1 className="main-title">
              Write emails 10x faster with{" "}
              <span className="highlight">Intelligence.</span>
            </h1>
            <p className="subtitle">
              Join 50,000+ professionals using AI to draft, summarize, and
              manage their inbox effortlessly.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16667 10.8333L7.5 14.1667L15.8333 5.83333"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Smart Drafting</h3>
                  <p>Context-aware suggestions based on your writing style.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon shield">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.66667L3.33334 4.16667V9.16667C3.33334 13.4833 6.325 17.4417 10 18.3333C13.675 17.4417 16.6667 13.4833 16.6667 9.16667V4.16667L10 1.66667Z"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Enterprise Security</h3>
                  <p>
                    Your data is encrypted and never used for training models.
                  </p>
                </div>
              </div>
            </div>

            <div className="illustration">
              <div className="email-card">
                <div className="email-header">
                  <div className="avatar"></div>
                  <div className="email-lines">
                    <div className="line short"></div>
                    <div className="line medium"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="signup-card">
              <div className="card-header">
                <h2>Create your account</h2>
                <p>Start your journey with AI-powered communication.</p>
              </div>

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Sidi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      placeholder="Sidi@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="password-row">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 10C2.5 10 5 4.16667 10 4.16667C15 4.16667 17.5 10 17.5 10C17.5 10 15 15.8333 10 15.8333C5 15.8333 2.5 10 2.5 10Z"
                              stroke="#6B7280"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="#6B7280"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.82 8.82C8.46734 9.17266 8.26607 9.64712 8.26607 10.1425C8.26607 10.6379 8.46734 11.1123 8.82 11.465M8.82 8.82C9.17266 8.46734 9.64712 8.26607 10.1425 8.26607C10.6379 8.26607 11.1123 8.46734 11.465 8.82M8.82 8.82L11.465 11.465M11.465 8.82L8.82 11.465M11.465 8.82C11.8177 9.17266 12.0189 9.64712 12.0189 10.1425C12.0189 10.6379 11.8177 11.1123 11.465 11.465M3.33333 3.33333L16.6667 16.6667M14.3525 14.3525C13.0733 15.3892 11.5675 16.0408 10 16.25C5 16.25 2.5 10 2.5 10C3.28833 8.42333 4.37583 7.06583 5.6475 5.6475M8.15833 4.49C8.765 4.32167 9.37667 4.23583 10 4.23583C15 4.23583 17.5 10 17.5 10C17.1792 10.6633 16.8017 11.2917 16.3733 11.8808"
                              stroke="#6B7280"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    I agree to the <a>Terms of Service</a> and{" "}
                    <a>Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="signup-button">
                  Create Account
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="signin-link">
                  Already have an account? <Link to="/login">Sign in</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registre;
