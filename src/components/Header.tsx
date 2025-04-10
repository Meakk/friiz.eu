import React from "react";
import { Link } from "wouter";

const Header = () => {
  return (
    <nav style={{ background: "var(--nav-bg-color)", padding: "1rem", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <h1 style={{ color: "var(--primary-color)" }}>Friiz.eu</h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none" }}>Home</Link>
            <Link href="/about" style={{ color: "var(--text-color)", textDecoration: "none" }}>About</Link>
            <Link href="/contact" style={{ color: "var(--text-color)", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </div>
      <div>
      <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Header;