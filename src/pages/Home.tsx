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
        backgroundImage: "url('/assets/texture.svg')",
        backgroundSize: "6px",
      }}
    >
      {/* ── Hero + 3D Viewer ── */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          maxHeight: "900px",
          overflow: "hidden",
        }}
      >
        {/* Left-aligned hero text; pointer-events disabled so the 3D viewer stays interactive */}
        <div
          id="hero"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "2rem 3rem",
            height: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            pointerEvents: "none",
          }}
        >
          <Hero />
        </div>

        {/* Full-viewport 3D viewer sitting behind the text */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Viewer file="earth.glb" scaling={0.8} />
        </div>
      </div>

      {/* ── Services ── */}
      <RenderingExpertise />

      {/* ── Contact ── */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
