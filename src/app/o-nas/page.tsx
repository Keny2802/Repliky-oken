import {
    Fragment
} from "react";

import Header from "../components/Header";
import About from "../sections/About";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <About />
            <Footer />
        </Fragment>
    );
};

export default Page;