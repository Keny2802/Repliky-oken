import {
    Fragment
} from "react";

import Header from "../components/Header";
import Subheader from "../components/Subheader";
import About from "../sections/About";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Subheader />
            <About />
            <Footer />
        </Fragment>
    );
};

export default Content;