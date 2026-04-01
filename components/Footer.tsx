"use client";

import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  domains: [
    { href: "/services", label: "Domain Names" },
    { href: "/services", label: "Digital Keys" },
    { href: "/services", label: "Orphilia Collection" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: "#F7F7F7",
      borderTop: "1px solid #E8E8E8",
      paddingTop: "64px",
      paddingBottom: "32px",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>🔑</span>
              <span style={{ fontSize: "22px", fontWeight: "800", color: "#222222" }}>Whytl</span>
            </div>
            <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7", maxWidth: "280px" }}>
              Premium domain names and digital keys for your next big idea. Part of the Orphilia digital ecosystem.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
              <a href="#" style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "white", border: "1px solid #E0E0E0",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#717171", transition: "all 0.2s",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "white", border: "1px solid #E0E0E0",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#717171", transition: "all 0.2s",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#222222", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Company</h4>
            <ul style={{ listStyle: "none" }}>
              {footerLinks.company.map((link) => (
                <li key={link.href} style={{ marginBottom: "10px" }}>
                  <Link href={link.href} style={{ fontSize: "15px", color: "#717171", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5A5F")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#222222", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Domains</h4>
            <ul style={{ listStyle: "none" }}>
              {footerLinks.domains.map((link) => (
                <li key={link.label} style={{ marginBottom: "10px" }}>
                  <Link href={link.href} style={{ fontSize: "15px", color: "#717171", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5A5F")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#222222", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Legal</h4>
            <ul style={{ listStyle: "none" }}>
              {footerLinks.legal.map((link) => (
                <li key={link.label} style={{ marginBottom: "10px" }}>
                  <Link href={link.href} style={{ fontSize: "15px", color: "#717171", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5A5F")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#717171")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #E0E0E0",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "14px", color: "#717171" }}>
            © {new Date().getFullYear()} Whytl. All rights reserved. Part of <span style={{ color: "#00A699", fontWeight: "600" }}>Orphilia</span>.
          </p>
          <p style={{ fontSize: "14px", color: "#B0B0B0" }}>
            Made with 🔑 for the digital world
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > .container > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          footer > .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
