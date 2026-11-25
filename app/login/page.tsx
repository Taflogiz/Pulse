
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await loginUser(email, password);
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Login failed."
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

      <form className="auth-card" onSubmit={handleLogin}>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in to PULSE.</h1>
        <p>Your next chapter is waiting.</p>

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
          placeholder="Your password"
          required
        />

        <button className="button auth-submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          New to PULSE? <Link href="/signup">Create an account</Link>
        </p>
      </form>
    </main>
  );
}
