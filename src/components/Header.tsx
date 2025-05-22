import React from "react";
import { Link } from "wouter";

const Header = () => {
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none" }}>
          <img src={ process.env.PUBLIC_URL + "/assets/friiz_white.svg" } alt="friiz" height={40} style={{ margin: "0 20px" }} />
          </Link>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/rendering" style={{ color: "var(--text-color)", textDecoration: "none" }}>Rendering</Link>
            <Link href="/sciviz" style={{ color: "var(--text-color)", textDecoration: "none" }}>SciViz</Link>
            <Link href="/ml" style={{ color: "var(--text-color)", textDecoration: "none" }}>Machine Learning</Link>
          </div>
        </div>
      </div>
      <div>
        <Link href="/contact" style={{ color: "var(--text-color)", textDecoration: "none" }}>
          <button>Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;