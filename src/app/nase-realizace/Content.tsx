import {
    Fragment
} from "react";
import {
    ChevronRight
} from "lucide-react";
import Link from "next/link";

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
import MarginTop from "../components/MarginTop";
import Flex from "../components/Flex";
import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import SmallerHeading from "../components/SmallerHeading";
import Img from "../components/Img";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const realizace = [
    {
        image: "/assets/fotky/reference/praha-ulice-rybna-repliky-oken/praha-ulice-rybna-repliky-oken-1.avif",
        alt: "Ukázka práce špaletových oken v ulice Rybná Prahy 1 | Jaroslav Heidinger | replikyoken.cz",
        title: "Praha ulice Rybná repliky oken",
        href: "/nase-realizace/praha-ulice-rybna-repliky-oken"
    },
    {
        image: "/assets/fotky/reference/okna-hradesinska-praha-10/okna-hradesinska-praha-10-2.avif",
        alt: "Ukázka práce oken ulice Hradešínská na Praze 10 | Jaroslav Heidinger | replikyoken.cz",
        title: "Praha ulice Hradešínská, Praha 10. Repliky",
        href: "/nase-realizace/praha-ulice-hradesinska-praha-10-repliky"
    },
    {
        image: "/assets/fotky/reference/jednoramova-okna-praha-ulice-nerudova/jednoramova-okna-praha-ulice-nerudova-1.avif",
        alt: "Ukázka práce jednorámová okna Praha ulice Nerudova | Jaroslav Heidinger | replikyoken.cz",
        title: "Jednorámová okna Praha ulice Nerudova",
        href: "/nase-realizace/jednoramova-okna-praha-ulice-nerudova"
    },
    {
        image: "/assets/fotky/reference/lomena-okna-praha-zizkov/lomena-okna-praha-zizkov-1.avif",
        alt: "Ukázka práce lomená okna Praha žižkov | Jaroslav Heidinger | replikyoken.cz",
        title: "Lomená okna Praha Žižkov",
        href: "/nase-realizace/lomena-okna-praha-zizkov"
    },
    {
        image: "/assets/fotky/reference/jemniste-repliky-jednoramovych-oken/jemniste-repliky-jednoramovych-oken-9.avif",
        alt: "Ukázka práce Jemniště repliky jednorámových oken | Jaroslav Heidinger | replikyoken.cz",
        title: "Jemniště repliky jednorámových oken",
        href: "/nase-realizace/jemniste-repliky-jednoramovych-oken"
    },
    {
        image: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif",
        alt: "Ukázka práce rekonstrukce historické vily v Pyšelech | Jaroslav Heidinger | replikyoken.cz",
        title: "Pyšely rekonstrukce historické vily",
        href: "/nase-realizace/pysely-rekonstrukce-historicke-vily"
    }
];

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
                    {/* <FlexCol>
                        <StreetRybna />
                        <StreetHradesinska />
                        <StreetNerudova />
                        <LomenaOknaZizkov />
                        <Pysely />
                        <Jemniste />
                    </FlexCol> */}
                    <MarginTop>
                            <Flex className="justify-center items-center flex-wrap gap-4 md:gap-5 lg:gap-6">
                                {
                                    realizace.map((card, index) => {
                                        const words = card.title.split(" ");
                                        const highlightedSentence = words.map((word, index) => {
                                            if (index === words.length - 1) {
                                                return (
                                                    <span
                                                    key={index}
                                                    className="text-[#e40209]">
                                                        {word}{" "}
                                                    </span>
                                                );
                                            } else {
                                                return (
                                                    <span key={index}>
                                                        {word}{" "}
                                                    </span>
                                                );
                                            };
                                        });

                                        return (
                                            <Link
                                            key={index}
                                            href={card.href}
                                            target="_blank">
                                                <RelativeOverlayWrapper
                                                    // key={index}
                                                    className="p-4 md:p-5 lg:p-6 md:w-[449px] max-h-[600px] odd:bg-[#f2f0ef] even:border-4 even:border-[#f2f0ef] cursor-pointer group">
                                                        <Wrapper className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                                                            <SmallerHeading className="text-[#1d1b21] text-center">
                                                                {/* {card.title} */}
                                                                {highlightedSentence}
                                                            </SmallerHeading>
                                                            <MarginTop>
                                                                <RelativeOverlayWrapper>
                                                                    <Img
                                                                    width={327}
                                                                    height={360}
                                                                    src={card.image}
                                                                    alt={card.alt}
                                                                    // w-full max-h-[300px] md:w-[327px] md:h-[360px]
                                                                    className="md:w-[327px] md:h-[360px] mx-auto object-cover"
                                                                    />                                                            
                                                                    <Wrapper className="p-2.5 md:p-3 lg:p-4 absolute bottom-5 right-5 md:right-0 bg-[#e40209] text-white rounded-md cursor-pointer">
                                                                        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                                                    </Wrapper>
                                                                </RelativeOverlayWrapper>
                                                        </MarginTop>
                                                    </Wrapper>
                                                </RelativeOverlayWrapper>
                                            </Link>
                                        );
                                    })
                                }
                            </Flex>
                        </MarginTop>
                </ScrollAnimation>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;