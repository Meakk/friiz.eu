import logo from "../assets/friiz_white.svg";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "3.5rem 2rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(0,0,0,0.18)",
        color: "var(--footer-text-color)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img src={logo} alt="friiz" height={30} style={{ display: "block", marginBottom: "1rem" }} />
          <p
            style={{
              color: "rgba(250,253,255,0.38)",
              fontSize: "0.875rem",
              lineHeight: "1.7",
              maxWidth: "220px",
              margin: 0,
            }}
          >
            Industrial-grade 3D visualization services powered by open-source F3D technology.
          </p>
        </div>

        {/* Company links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h4
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.11em",
              textTransform: "uppercase",
              color: "rgba(250,253,255,0.3)",
              marginBottom: "1rem",
            }}
          >
            Company
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { label: "Home", anchor: "#hero" },
              { label: "Services", anchor: "#services" },
              { label: "Contact", anchor: "#contact" },
            ].map(({ label, anchor }) => (
              <a
                key={label}
                href={anchor}
                style={{ color: "rgba(250,253,255,0.55)", fontSize: "0.9rem" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h4
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.11em",
              textTransform: "uppercase",
              color: "rgba(250,253,255,0.3)",
              marginBottom: "1rem",
            }}
          >
            Get in Touch
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <a
              href="mailto:contact@friiz.eu"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(250,253,255,0.55)", fontSize: "0.875rem" }}
            >
              <FaEnvelope size={11} />
              contact@friiz.eu
            </a>
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(250,253,255,0.55)", fontSize: "0.875rem" }}
            >
              <FaMapMarkerAlt size={11} />
              Lyon, France
            </span>
            <a
              href="https://github.com/f3d-app/f3d"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(250,253,255,0.55)", fontSize: "0.875rem" }}
            >
              <FaGithub size={11} />
              F3D on GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ color: "rgba(250,253,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
          &copy; {new Date().getFullYear()} friiz. All rights reserved.
        </p>
        <p style={{ color: "rgba(250,253,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
          FRIIZ SAS - SIRET: FR6901.105322770
        </p>
      </div>
    </footer>
  );
};

export default Footer;
