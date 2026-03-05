import {
    Fragment
} from "react";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Atc from "../sections/Atc";
import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import StreetRybna from "../components/StreetRybna";
import StreetHradesinska from "../components/StreetHradesinska";
import StreetNerudova from "../components/StreetNerudova";
import LomenaOknaZizkov from "../components/lomenaOknaZizkov";
import Jemniste from "../components/Jemniste";
import Pysely from "../components/Pysely";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <ScrollAnimation>
                    <FlexCol className="items-center">
                        <Heading>
                            Naše realizace
                        </Heading>
                        <Subheading>
                            Podívejte se na naše realizace.
                        </Subheading>
                    </FlexCol>
                    <FlexCol>
                        <StreetRybna />
                        <StreetHradesinska />
                        <StreetNerudova />
                        <LomenaOknaZizkov />
                        <Pysely />
                        <Jemniste />
                    </FlexCol>
                </ScrollAnimation>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;