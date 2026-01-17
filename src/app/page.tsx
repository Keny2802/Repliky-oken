import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Atc from "./sections/Atc";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
      <About />
      <Atc />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;