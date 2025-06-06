import React from "react";
import Viewer from "../components/Viewer";
import CustomerMarquee from "../components/Marquee";
import Hero from "../components/Hero";
import RenderingExpertise from "../components/RenderingExpertise";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        backgroundImage: "url('/assets/texture.svg')", // Path to the SVG file
        backgroundSize: "6px", // Size of the pattern
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1280px",
          height: "75vh", // Set a height for the overlapping section
        }}
      >
        <div
          id="hero"
          style={{
            position: "relative", // Keep Hero positioned normally
            zIndex: 2, // Ensure Hero is above the Viewer
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center the content vertically
            padding: "2rem",
            height: "100%", // Ensure the div takes up the full height of its parent
          }}>
          <Hero />
        </div>

        <div
          style={{
            position: "absolute", // Position Viewer absolutely within the parent
            top: 0,
            right: 0,
            left: "auto",
            width: "100vw", // Viewer takes 50% of the viewport width
            height: "100vh", // Viewer spans the full height of the parent
            zIndex: 1, // Ensure Viewer is behind the Hero
            overflow: "hidden", // Prevent scrollbars
          }}
        >
          <Viewer file="earth.glb" scaling={0.8} />
        </div>
      </div>
      <RenderingExpertise style={{ maxWidth: "1280px" }} />

      <div
        id="contact"
        style={{
          display: "flex",
          flexDirection: "row", // Place Contact and Viewer side by side
          gap: "2rem",
          alignItems: "flex-start", // Align items at the top
        }}
      >
        <Contact style={{ flex: 1, maxWidth: "640px" }} /> {/* Contact takes half the space */}
      </div>
    </div>
  );
};

export default Home;
