import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/contact-header/ContactHeader";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import LomenaOknaZizkov from "@/app/components/lomenaOknaZizkov";
import Atc from "@/app/sections/Atc";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <LomenaOknaZizkov />
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;