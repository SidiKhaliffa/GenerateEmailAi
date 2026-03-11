import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GenerateAi.css';

const GenerateAi = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedTone, setSelectedTone] = useState('Professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState(null);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const client = location.state?.client;

  const tones = ['Professional', 'Friendly', 'Formal', 'Urgent'];

  const handleGenerateDraft = async () => {
    console.log("Client info:", client);
    if (!prompt.trim()) {
      alert('Please enter a prompt to generate an email.');
      return;
    }
    setIsGenerating(true);
    try{
      const response = await fetch('http://localhost:3000/api/ai/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: client?.name,
          company: client?.company,
          description: prompt,
          tone: selectedTone,
        }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to generate email');
      }
      
      const [subjectLine, ...bodyLines] = data.email.split('\n');
      setGeneratedEmail({
        subject: subjectLine.replace('Subject: ', '').trim(),
        body: bodyLines.join('\n').trim(),
      });
      setIsGenerating(false);
    }
    catch (error) {
      console.error('Error generating email:', error);
      alert('An error occurred while generating the email. Please try again.');
      setIsGenerating(false);
    }
  };
  
  const handleCopie = () => {
    if (!generatedEmail) return;
  
    // Create the full email text with subject and body
    const emailText = `Subject: ${generatedEmail.subject}\n\n${generatedEmail.body}`;
  
    // Copy to clipboard
    navigator.clipboard.writeText(emailText)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
      });
  };

  return (
    <div className="compose-container">
      <main className="compose-main">
        <div className="compose-content">
          <div className="compose-header">
            <h1>Compose with AI</h1>
            <p>Describe your objective and let our AI craft the perfect message.</p>
          </div>

          <div className="compose-grid">
            {/* Left Panel - Input */}
            <div className="input-panel">
              <div className="input-section">
                <label className="input-label">Prompt / Objective</label>
                <textarea
                  className="prompt-input"
                  placeholder="Write something here for describing the email you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="6"
                />
              </div>

              <div className="tone-section">
                <label className="input-label">Email Tone</label>
                <div className="tone-buttons">
                  {tones.map((tone) => (
                    <button
                      key={tone}
                      className={`tone-btn ${selectedTone === tone ? 'active' : ''}`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {selectedTone === tone && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className="generate-btn"
                onClick={handleGenerateDraft}
                disabled={isGenerating || !prompt.trim()}
              >
                {isGenerating ? (
                  <>
                    <div className="spinner"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 6.66667C13.3333 8.50762 11.841 10 10 10C8.15905 10 6.66667 8.50762 6.66667 6.66667C6.66667 4.82572 8.15905 3.33334 10 3.33334C11.841 3.33334 13.3333 4.82572 13.3333 6.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12.5C6.77834 12.5 4.16667 15.1117 4.16667 18.3333H15.8333C15.8333 15.1117 13.2217 12.5 10 12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Generate Draft
                  </>
                )}
              </button>
            </div>

            {/* Right Panel - Preview */}
            <div className="preview-panel">
              <div className="preview-header">
                <div className="preview-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 5.83333H16.6667M3.33333 5.83333V14.1667C3.33333 15.0871 4.07953 15.8333 5 15.8333H15C15.9205 15.8333 16.6667 15.0871 16.6667 14.1667V5.83333M3.33333 5.83333L6.66667 2.5H13.3333L16.6667 5.83333" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>AI Generated Preview</span>
                </div>
                {generatedEmail && (
                  <div className="preview-actions">
                    <button className="action-btn send" onClick={handleCopie}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33333 5.33333V3.99999C5.33333 3.26361 5.93028 2.66666 6.66667 2.66666H12C12.7364 2.66666 13.3333 3.26361 13.3333 3.99999V10C13.3333 10.7364 12.7364 11.3333 12 11.3333H10.6667M4 13.3333H9.33333C10.0697 13.3333 10.6667 12.7364 10.6667 12V6.66666C10.6667 5.93028 10.0697 5.33333 9.33333 5.33333H4C3.26362 5.33333 2.66667 5.93028 2.66667 6.66666V12C2.66667 12.7364 3.26362 13.3333 4 13.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                )}
              </div>

              <div className="preview-content">
                {generatedEmail ? (
                  <>
                    <div className="email-subject">
                      <label>SUBJECT</label>
                      <p>{generatedEmail.subject}</p>
                    </div>
                    <div className="email-body">
                      <pre>{generatedEmail.body}</pre>
                    </div>
                    <div className="ai-disclaimer">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 5.33334V8.00001M8 10.6667H8.00667" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>AI can make mistakes. Please verify important information before sending.</span>
                    </div>
                  </>
                ) : (
                  <div className="empty-preview">
                    <div className="empty-icon">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="32" fill="#F3F4F6"/>
                        <path d="M24 26.6667L32.3604 32.4203C32.9403 32.8118 33.6597 32.8118 34.2396 32.4203L42.6667 26.6667M26.6667 42H37.3333C38.8061 42 40 40.8061 40 39.3333V24.6667C40 23.1939 38.8061 22 37.3333 22H26.6667C25.1939 22 24 23.1939 24 24.6667V39.3333C24 40.8061 25.1939 42 26.6667 42Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>Your AI-generated email will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GenerateAi;