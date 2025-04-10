import React from "react";

const Hero = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <h1>Welcome to Friiz</h1>
      <p>
        Open-source solutions for 3D asset viewing and development. Explore,
        interact, and integrate 3D assets seamlessly.
      </p>
      <button style={{
        background: "var(--button-bg-color)",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s, color 0.3s"
      }}>
        Get Started
      </button>
    </div>
  );
};

export default Hero;