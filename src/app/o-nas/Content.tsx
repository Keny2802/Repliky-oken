import {
    Fragment
} from "react";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import About from "../sections/About";
import Atc from "../sections/Atc";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <About />
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;