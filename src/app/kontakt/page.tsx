import {
    Fragment
} from "react";

import Header from "../components/Header";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;