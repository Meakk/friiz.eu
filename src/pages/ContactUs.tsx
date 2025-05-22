import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Contact style={{ maxWidth: "1280px" }}/>
      </div>
  );
};

export default Home;
