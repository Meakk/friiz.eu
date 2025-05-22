import React from "react";
import Viewer from "../components/Viewer";
import CustomerMarquee from "../components/Marquee";
import Hero from "../components/Hero";
import ThreeColumnText from "../components/ThreeColumnText";
import RenderingExpertise from "../components/RenderingExpertise";

const Home = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "1280px", display: "flex", gap: "2rem", alignItems: "center" }}>
          <Hero style={{ textAlign: "center", margin: "0 auto" }} />
          <Viewer />
        </div>
        <CustomerMarquee />
        <RenderingExpertise style={{ maxWidth: "1280px" }}/>
        <RenderingExpertise style={{ maxWidth: "1280px" }}/>
        <RenderingExpertise style={{ maxWidth: "1280px" }}/>
        <RenderingExpertise style={{ maxWidth: "1280px" }}/>
        {/*<ThreeColumnText />*/}
      </div>
  );
};

export default Home;
