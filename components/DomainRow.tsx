"use client";

import { useState } from "react";

interface Domain {
  name: string;
  cat: string;
  price: string;
}

export default function DomainRow({ domain }: { domain: Domain }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 140px 140px",
        padding: "18px 0",
        borderBottom: "1px solid var(--border)",
        alignItems: "center",
        background: hovered ? "var(--bg-alt)" : "transparent",
        transition: "background 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <circle cx="8" cy="8" r="7" stroke="var(--border-strong)" strokeWidth="1.4" />
          <circle cx="8" cy="8" r="3" fill="var(--text-faint)" />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 500,
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          {domain.name}
        </span>
      </div>
      <span
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
        }}
      >
        {domain.cat}
      </span>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: domain.price === "Premium" ? "var(--accent)" : "var(--text)",
          letterSpacing: "-0.01em",
        }}
      >
        {domain.price}
      </span>
    </div>
  );
}
