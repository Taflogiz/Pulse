
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DownloadsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/login");
        return;
      }

      setLoading(false);
    }

    checkUser();
  }, [router]);

  if (loading) {
    return <main className="section">Loading downloads...</main>;
  }

  return (
    <main className="section">
      <Link href="/dashboard">← Back to dashboard</Link>

      <div style={{ marginTop: 35 }}>
        <span className="eyebrow">YOUR LIBRARY</span>
        <h1 style={{ fontSize: 36, marginTop: 12 }}>
          My downloads.
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 12 }}>
          Books you've successfully purchased will appear here.
        </p>
      </div>

      <div className="empty-library" style={{ marginTop: 30 }}>
        <h3>Your library is waiting.</h3>
        <p>
          Once you purchase a book and its payment is verified,
          it will become available here.
        </p>
        <Link
          href="/"
          className="button"
          style={{ marginTop: 20 }}
        >
          Explore books
        </Link>
      </div>
    </main>
  );
}
