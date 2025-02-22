import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import Openaccount from "../support/Openaccount";
import Navbar from "../support/Navbar";
import Footer from "../support/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <Openaccount />
    </>
  );
}

export default HomePage;
