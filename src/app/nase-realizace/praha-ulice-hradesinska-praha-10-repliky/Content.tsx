import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/contact-header/ContactHeader";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import StreetHradesinska from "@/app/components/StreetHradesinska";
import Atc from "@/app/sections/Atc";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <StreetHradesinska />
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;