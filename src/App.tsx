import React from "react";
import { Route } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Rendering from "./pages/Rendering";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/rendering" component={Rendering} />
      <Route path="/contact" component={ContactUs} />
      <Footer />
    </>
  );
};

export default App;