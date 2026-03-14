import {
    Fragment
} from "react";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;