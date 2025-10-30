import React, { useState } from "react";

export default function PasswordResetPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const errs = [];
    if (password.trim().length < 6) errs.push("Password must be at least 6 characters.");
    if (password !== confirm) errs.push("Passwords do not match.");
    if (errs.length) {
      setMessage("✗ " + errs.join(" "));
      return;
    }
    setMessage("✓ Password reset successful!");
    setPassword("");
    setConfirm("");
  }

  return (
    <>
      <style>{`
        :root {
          --bg: #ffffff;
          --ring: #0d6efd;      /* blue frame */
          --pill: #d9d9d9;      /* light grey input background */
          --text: #333;
          --muted: #6b7280;
          --btn: #2f6df6;       /* blue button */
          --btn-text: #fff;
          --shadow: 0 6px 24px rgba(0,0,0,.06);
        }

        .reset-page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          outline: 6px solid var(--ring); /* blue frame */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem 1rem;
        }

        /* Top-left brand pill */
        .brand-pill {
          position: fixed;
          top: 0.8rem;
          left: 0.8rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #222;
          color: #e5e7eb;
          text-decoration: none;
          border-radius: 0.4rem;
          padding: 0.5rem 0.7rem;
          box-shadow: var(--shadow);
        }
        .brand-pill .gear { font-size: 1rem; }
        .brand-pill .brand-text { font-size: 0.9rem; }

        /* Header pill – centered horizontally */
        .header-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5e5e5;
          color: #4b5563;
          font-weight: 700;
          border-radius: 999px;
          padding: 0.8rem 1.2rem;
          box-shadow: var(--shadow);
          margin-bottom: 1.2rem;
          width: min(460px, 90%);
          text-align: center;
        }

        /* Form card */
        .card {
          width: min(560px, 94vw);
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: stretch;
        }

        /* Input pill style */
        .input-pill {
          display: flex;
          align-items: center;
          background: var(--pill);
          border-radius: 999px;
          height: 44px;
          padding: 0 0.9rem;
        }
        .input-pill input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 15px;
          color: #111;
        }
        .input-pill input::placeholder {
          color: #6b7280;
        }

        /* Button */
        .btn-primary {
          margin-top: 0.3rem;
          height: 46px;
          border: none;
          border-radius: 999px;
          background: var(--btn);
          color: var(--btn-text);
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: background 0.3s;
        }
        .btn-primary:hover {
          background: #255cdf;
        }

        /* Message */
        .msg {
          text-align: center;
          font-size: 0.95rem;
          margin-top: 8px;
        }
        .msg.ok { color: green; }
        .msg.err { color: #c0392b; }

        /* Footer link */
        .login-link {
          margin-top: 10px;
          text-align: center;
          font-size: 0.95rem;
        }
        .login-link a {
          color: #1f3f8c;
          text-decoration: underline;
        }
      `}</style>

      <div className="reset-page">
        <a className="brand-pill" href="/">
          <span className="gear">⚙</span>
          <span className="brand-text">GearUP</span>
        </a>

        <div className="header-pill">Reset Password</div>

        <form className="card" onSubmit={onSubmit} noValidate>
          <label className="input-pill">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </label>

          <label className="input-pill">
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              minLength={6}
              required
            />
          </label>

          <button type="submit" className="btn-primary">Reset Password</button>

          {message && (
            <p className={`msg ${message.startsWith("✓") ? "ok" : "err"}`}>{message}</p>
          )}

          <p className="login-link">
            <a href="/">Remember your password? Sign in</a>
          </p>
        </form>
      </div>
    </>
  );
}
