import React from "react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer style={{ background: "var(--footer-bg-color)", color: "var(--footer-text-color)", padding: "1rem", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Friiz.eu All rights reserved.</p>
      <p>
        <Link href="/terms" style={{ color: "var(--primary-color)", textDecoration: "none" }}>Terms of Service</Link> |{" "}
        <Link href="/privacy" style={{ color: "var(--primary-color)", textDecoration: "none" }}>Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
