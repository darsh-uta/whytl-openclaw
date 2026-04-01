"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "left";
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${direction === "left" ? "reveal-left" : "reveal"} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
