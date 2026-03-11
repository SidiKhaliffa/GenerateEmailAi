import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import API_URL from "../../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/dashboard");
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data.token);
        // Store token and user info as needed
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
    console.log("Sign in:", { email, password, rememberMe });
  };

  return (
    <div className="signin-container">
      <header className="header">
        <div className="logo">
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
          <span className="logo-text">MailAI</span>
        </div>
      </header>

      <main className="main-content">
        <div className="signin-box">
          <h1 className="title">Welcome back</h1>
          <p className="subtitle">
            Please enter your details to sign in to your AI assistant
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button type="submit" className="signin-button">
              Sign in
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16666 10H15.8333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.16667L15.8333 10L10 15.8333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/registre">Create an account</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
