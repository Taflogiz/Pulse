
"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      "Your upload form is ready. Database submission and review approval will be connected in a later batch."
    );
  }

  return (
    <main className="section">
      <Link href="/dashboard">← Back to dashboard</Link>

      <div style={{ marginTop: 35 }}>
        <span className="eyebrow">PULSE CREATOR STUDIO</span>
        <h1 style={{ fontSize: 36, marginTop: 12 }}>
          Publish your story.
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 12 }}>
          Submit your novel for review before it appears in the library.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="auth-card"
        style={{ marginTop: 30, maxWidth: 650 }}
      >
        <label>Book title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your book title"
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell readers about your book"
          required
          rows={5}
          style={{
            width: "100%",
            padding: 14,
            background: "#090f1d",
            color: "white",
            border: "1px solid var(--border)",
            borderRadius: 9
          }}
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 14,
            background: "#090f1d",
            color: "white",
            border: "1px solid var(--border)",
            borderRadius: 9
          }}
        >
          <option value="">Choose category</option>
          <option>Romance</option>
          <option>Drama</option>
          <option>Adventure</option>
          <option>Mystery</option>
          <option>Fantasy</option>
          <option>Education</option>
          <option>Short Stories</option>
        </select>

        <label>Price (USD)</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Novel PDF (maximum 50 MB)</label>
        <input
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />

        <button className="button auth-submit" type="submit">
          Submit for review
        </button>

        <p style={{ color: "var(--muted)", marginTop: 15, fontSize: 12 }}>
          PDF: {file ? file.name : "No file selected"}.
          Price: ${Number(price || 0).toFixed(2)} USD.
        </p>
      </form>
    </main>
  );
}
