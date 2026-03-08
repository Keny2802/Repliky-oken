import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/contact-header/ContactHeader";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import Jemniste from "@/app/components/Jemniste";
import Atc from "@/app/sections/Atc";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <Jemniste />
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;