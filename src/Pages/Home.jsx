import React from "react";
import { Client } from "../components";
import {
  Consult,
  Header,
  ServiceSection,
  Stats,
  TrackRecord,
} from "../container";
import Faq from "../container/Faq/Faq";

import { images } from "../constants";

const home = {
  title: "First-class, cutting-edge solutions for your business",
  subtitle:
    "We discover undiscovered markets and give our clients a competitive edge.",
  btntext: "Get a free Consultation",
  img: images.heroImg,
  patternImg1: images.blueCirlcePattern,
};

const Home = () => {
  return (
    <>
      <Header
        title={home.title}
        subtitle={home.subtitle}
        btnText={home.btntext}
        img={home.img}
        patternImg1={home.patternImg1}
      />
      <TrackRecord />
      <ServiceSection />
      <Stats />
      <Client />
      <Consult />
      <Faq />
    </>
  );
};

export default Home;
