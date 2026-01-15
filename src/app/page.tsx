import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import Atc from "./sections/Atc";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
      <Atc />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;