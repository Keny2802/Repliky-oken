import {
    Fragment
} from "react";

import Header from "../components/Header";
import Content from "./Content";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <Content />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;