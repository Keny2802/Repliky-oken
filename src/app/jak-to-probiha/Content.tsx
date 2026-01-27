import {
    Fragment
} from "react";

import Header from "../components/Header";
import Contact from "../sections/Contact";
import HowItWorks from "../components/HowItWorks";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <HowItWorks />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;