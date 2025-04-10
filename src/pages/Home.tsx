import React from "react";
import Viewer from "../components/Viewer";
import CustomerMarquee from "../components/Marquee";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Hero style={{ 
            textAlign: "center", marginBottom: "2rem",
            flex: 1
            }} />
          <Viewer style={{
            flex: 1
          }} />
        </div>
        <CustomerMarquee />
      </div>
    </div>
  );
};

export default Home;