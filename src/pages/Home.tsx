import React from "react";
import Viewer from "../components/Viewer";
import CustomerMarquee from "../components/Marquee";
import Hero from "../components/Hero";
import ThreeColumnText from "../components/ThreeColumnText";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Hero style={{ textAlign: "center", margin: "0 auto" }} />
          <Viewer />
        </div>
        <CustomerMarquee />
        <ThreeColumnText /> {/* Add the new component here */}
      </div>
    </div>
  );
};

export default Home;
