import React, { useState, useEffect } from "react";
import logo from "../assets/friiz_white.svg";
import { Link } from "wouter";

const Hero = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const words = ["Explore.", "Visualize.", "Interact."];
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
    >
      <h1>
        <span style={{ color: "var(--text-color)", display: "inline-block", verticalAlign: "top" }}>Welcome to</span>
        <img
          src={logo}
          alt="friiz"
          style={{
            height: "7rem", // Match the height of the text
            width: "auto", // Maintain aspect ratio
          }}
        />
      </h1>
      <div
        style={{
          display: "flex", // Use flexbox for alignment
          justifyContent: "flex-end", // Align the content to the right
          width: "100%", // Ensure the div spans the full width
          transform: "translateX(-40px) translateY(-20px)"
        }}
      >
        <span
          style={{
            color: "var(--text-color)",
            fontWeight: "bold",
            fontSize: "1.5rem",
            display: "inline-block",
            transform: animate ? "translateX(100%)" : "translateX(0)",
            opacity: animate ? 0 : 1,
            transition: "transform 0.4s ease, opacity 0.4s ease"
          }}
        >
          {words[currentWordIndex]}
        </span>
      </div>
    </div>
  );
};

export default Hero;