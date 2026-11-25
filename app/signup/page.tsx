
"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/lib/auth";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await registerUser(email, password, username, handle);
      setMessage("Account created. Check your email to verify it.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <Link href="/" className="brand">
        <span className="brand-icon">P</span>
        PULSE
      </Link>

      <form className="auth-card" onSubmit={handleSignup}>
        <span className="eyebrow">JOIN THE COMMUNITY</span>
        <h1>Create your account.</h1>
        <p>Discover stories. Share your own.</p>

        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          required
        />

        <label>Unique handle</label>
        <input
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="e.g. storywriter"
          pattern="[A-Za-z0-9_]{3,20}"
          title="Use 3–20 letters, numbers or underscores."
          required
        />

        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          minLength={8}
          required
        />

        <button className="button auth-submit" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </form>
    </main>
  );
}
