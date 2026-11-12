
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Chip,
} from "@mui/material";
import {
  AutoAwesome,
  ContentCopy,
  Refresh,
  MailOutline,
  EditNote,
  Send,
  CheckCircle,
  Sparkles,
} from "@mui/icons-material";
import "./App.css";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("Professional");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerateReply = async () => {
    if (!emailContent.trim()) {
      setError("Please enter your email content first.");
      return;
    }

    setError("");
    setGeneratedReply("");
    setLoading(true);
    setCopied(false);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        { emailContent, tone }
      );

      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to generate reply. Please check your backend and API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedReply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Unable to copy. Please copy the reply manually.");
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <MailOutline />
          </div>
          <div>
            <h2>SmartMail</h2>
            <span>AI ASSISTANT</span>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>

        <div className="nav-item active">
          <EditNote />
          <span>Email Writer</span>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-tip">
            <Sparkles />
            <strong>Write smarter.</strong>
            <p>Let AI help you communicate better, one email at a time.</p>
          </div>
          <div className="version">SMARTMAIL ASSISTANT · 1.0</div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> Email Writer
          </div>
          <div className="status">
            <span className="status-dot"></span>
            AI Workspace
          </div>
        </header>

        <section className="workspace">
          <div className="hero">
            <div className="eyebrow">
              <AutoAwesome fontSize="small" />
              YOUR PERSONAL AI WRITING ASSISTANT
            </div>

            <h1>
              Emails, written <span>better.</span>
            </h1>

            <p>
              Turn your thoughts into thoughtful, professional email replies
              in seconds.
            </p>
          </div>

          <div className="editor-card">
            <div className="section-heading">
              <div className="heading-icon">
                <MailOutline />
              </div>
              <div>
                <h3>Original email</h3>
                <p>Paste the email you want to reply to.</p>
              </div>
            </div>

            <TextField
              fullWidth
              multiline
              minRows={7}
              maxRows={12}
              placeholder="Hi there, I wanted to reach out regarding..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              className="email-input"
            />

            <div className="input-footer">
              <span> <EditNote fontSize="small" /> Email content</span>
              <span>{emailContent.length} characters</span>
            </div>

            <div className="tone-section">
              <h3>Choose your tone</h3>
              <p>How should your reply sound?</p>

              <div className="tone-options">
                {[
                  {
                    name: "Professional",
                    description: "Polished & formal",
                    emoji: "💼",
                  },
                  {
                    name: "Casual",
                    description: "Simple & relaxed",
                    emoji: "☕",
                  },
                  {
                    name: "Friendly",
                    description: "Warm & welcoming",
                    emoji: "✨",
                  },
                ].map((item) => (
                  <button
                    key={item.name}
                    className={`tone-card ${
                      tone === item.name ? "selected" : ""
                    }`}
                    onClick={() => setTone(item.name)}
                  >
                    <span className="tone-emoji">{item.emoji}</span>
                    <span className="tone-name">{item.name}</span>
                    <span className="tone-description">
                      {item.description}
                    </span>
                    {tone === item.name && (
                      <CheckCircle className="tone-check" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <Button
              className="generate-button"
              fullWidth
              disabled={loading || !emailContent.trim()}
              onClick={handleGenerateReply}
              startIcon={
                loading ? null : <AutoAwesome />
              }
            >
              {loading ? (
                <>
                  <CircularProgress size={19} color="inherit" />
                  &nbsp; Generating your reply...
                </>
              ) : (
                "Generate AI Reply"
              )}
            </Button>

            <div className="privacy-note">
              <Sparkles fontSize="small" />
              AI-powered writing · Always review before sending
            </div>
          </div>

          {generatedReply && (
            <div className="reply-card">
              <div className="reply-header">
                <div className="section-heading">
                  <div className="reply-icon">
                    <AutoAwesome />
                  </div>
                  <div>
                    <h3>Your AI-generated reply</h3>
                    <p>Review and personalize before sending.</p>
                  </div>
                </div>
                <Chip label={tone} className="reply-tone" />
              </div>

              <div className="reply-content">{generatedReply}</div>

              <div className="reply-actions">
                <Button
                  variant="contained"
                  startIcon={<ContentCopy />}
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy reply"}
                </Button>
                <Button
                  startIcon={<Refresh />}
                  onClick={handleGenerateReply}
                  disabled={loading}
                >
                  Regenerate
                </Button>
              </div>
            </div>
          )}

          <footer className="workspace-footer">
            Crafted for better communication <span>✦</span> Powered by AI
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
