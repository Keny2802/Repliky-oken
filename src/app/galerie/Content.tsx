import {
    Fragment
} from "react";

import Header from "../components/Header";
import Contact from "../sections/Contact";
import Gallery from "../sections/Gallery";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <Gallery />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;