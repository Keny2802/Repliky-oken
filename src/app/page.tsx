import {
  Fragment
} from "react";

import ContactHeader from "./components/contact-header/ContactHeader";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import BeforeAndAfter from "./sections/BeforeAndAfter";
import Atc from "./sections/Atc";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <ContactHeader />
      <Header />
      <Subheader />
      <Hero />
      <Products />
      <About />
      <BeforeAndAfter />
      <Atc />
      <Gallery />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;