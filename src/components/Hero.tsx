import React, { useState, useEffect } from "react";

const Hero = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const words = ["Explore.", "Interact.", "Analyze.", "Integrate."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(false); // Reset animation
      }, 500); // Match the animation duration
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        <span style={{ color: "var(--text-color)" }}>Welcome to</span>{" "}
        <span style={{ color: "var(--primary-color)" }}>friiz</span>
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "1rem 0" }}>
        Open-source solutions for 3D asset viewing and development.{" "}
        <span
          style={{
            fontWeight: "bold",
            color: "var(--primary-color)",
            fontSize: "1.5rem",
            display: "inline-block",
            transform: animate ? "translateX(100%)" : "translateX(0)",
            opacity: animate ? 0 : 1,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
        >
          {words[currentWordIndex]}
        </span>
        <span
          style={{
            display: "block",
            marginTop: "0.5rem",
            textAlign: "left",
            width: "100%",
          }}
        >
        </span>
      </p>
      <button
        style={{
          background: "var(--button-bg-color)",
          color: "white",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "transform 0.3s, background 0.3s",
          fontSize: "1rem",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Contact
      </button>
    </div>
  );
};

export default Hero;