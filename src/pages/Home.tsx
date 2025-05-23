import React from "react";
import Viewer from "../components/Viewer";
import CustomerMarquee from "../components/Marquee";
import Hero from "../components/Hero";
import RenderingExpertise from "../components/RenderingExpertise";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1280px",
          height: "50vh", // Set a height for the overlapping section
        }}
      >
        <Hero
          style={{
            position: "relative", // Keep Hero positioned normally
            zIndex: 1, // Ensure Hero is above the Viewer
            textAlign: "center",
          }}
        />
        <div
          style={{
            position: "absolute", // Position Viewer absolutely within the parent
            top: 0,
            right: 0,
            left: "auto",
            width: "50vw", // Viewer takes 50% of the viewport width
            height: "100vh", // Viewer spans the full height of the parent
            zIndex: -1, // Ensure Viewer is behind the Hero
            overflow: "hidden", // Prevent scrollbars
          }}
        >
          <Viewer />
        </div>
      </div>
      <CustomerMarquee />
      <RenderingExpertise style={{ maxWidth: "1280px" }} />
      <RenderingExpertise style={{ maxWidth: "1280px" }} />
      <RenderingExpertise style={{ maxWidth: "1280px" }} />
      <RenderingExpertise style={{ maxWidth: "1280px" }} />
    </div>
  );
};

export default Home;
