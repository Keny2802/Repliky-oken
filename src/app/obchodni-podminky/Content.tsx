import {
    Fragment
} from "react";
import {
    termsAndConditionsSet
} from "../components/termsAndConditions";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import MarginTop from "../components/MarginTop";
import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import SmallerHeading from "../components/SmallerHeading";
import BodyText from "../components/BodyText";
import Atc from "../sections/Atc";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <Wrapper className="p-3 md:p-4 lg:p-4.5 bg-[#f5f2e8]">
                <ScrollAnimation>
                    <Heading>
                        Obchodní podmínky
                    </Heading>
                    <MarginTop>
                        <FlexCol className="gap-3">
                            {
                                termsAndConditionsSet.map((block, index) => {
                                    const {
                                        title,
                                        text
                                    } = block;

                                    return (
                                        <Fragment key={index}>
                                            <FlexCol className="gap-2">
                                                <SmallerHeading>
                                                    {`${index + 1}. ${title}`}
                                                </SmallerHeading>
                                                <MarginTop >
                                                    {
                                                        text.map((textBlock, idx) => {
                                                            return (
                                                                <BodyText
                                                                key={idx}>
                                                                    {`${index + 1}.${idx + 1} ${textBlock}`}
                                                                </BodyText>
                                                            );
                                                        })
                                                    }
                                                </MarginTop>
                                            </FlexCol>
                                        </Fragment>
                                    );
                                })
                            }
                        </FlexCol>
                    </MarginTop>
                </ScrollAnimation>
            </Wrapper>
            <Atc className="border-t border-gray-200" />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;