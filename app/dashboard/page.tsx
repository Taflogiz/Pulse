
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState("Reader");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/login");
        return;
      }

      setUsername(
        data.user.user_metadata?.username || "Reader"
      );
      setLoading(false);
    }

    loadUser();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  if (loading) {
    return <main className="auth-page">Loading PULSE...</main>;
  }

  return (
    <main className="section">
      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brand-icon">P</span>
          PULSE
        </Link>
        <button className="secondary-button" onClick={logout}>
          Sign out
        </button>
      </header>

      <div style={{ marginTop: 45 }}>
        <span className="eyebrow">YOUR PULSE ACCOUNT</span>
        <h1 style={{ fontSize: 36, marginTop: 12 }}>
          Welcome, {username}.
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 12 }}>
          Your stories, purchases and creator tools in one place.
        </p>
      </div>

      <div className="dashboard-grid">
        <Link href="/upload" className="dashboard-card">
          <h2>Upload a book</h2>
          <p>Share your writing with PULSE readers.</p>
        </Link>

        <Link href="/downloads" className="dashboard-card">
          <h2>My downloads</h2>
          <p>Access books you have purchased.</p>
        </Link>

        <Link href="/transactions" className="dashboard-card">
          <h2>Transactions</h2>
          <p>Review your payment activity.</p>
        </Link>

        <Link href="/profile" className="dashboard-card">
          <h2>My profile</h2>
          <p>Manage your public creator profile.</p>
        </Link>
      </div>
    </main>
  );
}
