import React, { useState, useEffect } from "react";
import f3dLogo from "../assets/f3d.svg";

const Hero = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const trans = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div {...props}>
      <div className="hero-badge" style={trans(0)}>
        <img src={f3dLogo} alt="F3D" style={{ height: "20px", width: "auto" }} />
        F3D Experts & Maintainers
      </div>

      <h1
        style={{
          ...trans(100),
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          lineHeight: "1.1",
          color: "var(--text-color)",
          fontWeight: 800,
          marginBottom: "1.5rem",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
        }}
      >
        Industrial-Grade
        <br />
        <span className="gradient-text">3D Visualization</span>
      </h1>

      <p
        style={{
          ...trans(200),
          fontSize: "1.1rem",
          maxWidth: "500px",
          color: "rgba(250,253,255,0.62)",
          marginBottom: "2.5rem",
          lineHeight: "1.85",
        }}
      >
        From scientific datasets to interactive product viewers — we build
        high-performance 3D experiences powered by open-source technologies.
      </p>

      <div
        style={{
          ...trans(320),
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          pointerEvents: "auto",
        }}
      >
        <button className="btn-primary" onClick={handleContact}>
          Get in Touch
        </button>
        <button className="btn-outline" onClick={handleServices}>
          Our Services
        </button>
      </div>
    </div>
  );
};

export default Hero;