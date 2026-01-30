import {
    Fragment
} from "react";
import {
    Gallery
} from "./Gallery";
import Image from "next/image";

import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Atc from "../sections/Atc";
import Wrapper from "../components/Wrapper";
import FlexCol from "../components/FlexCol";
import FlexRow from "../components/FlexRow";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Subheader />
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <FlexCol className="items-center">
                    <Heading>
                        Naše realizace
                    </Heading>
                    <Subheading>
                        Podívejte se na naše realizace.
                    </Subheading>
                </FlexCol>
                <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                    {
                        Gallery.map((card, index) => {
                            return (
                                <Fragment key={index}>
                                    <Wrapper className="relative group cursor-pointer">
                                        <Image
                                        width={300}
                                        height={150}
                                        src={card.image}
                                        alt={card.alt || `${index + 1}. Ukázka realizace replikyoken.cz Jaroslav Heindingera`}
                                        draggable={false}
                                        className="w-full md:w-50 md:h-50 object-cover rounded-md cursor-pointer"
                                        />
                                        <Wrapper className="rounded-md bg-black/50 text-white absolute inset-0 flex justify-center items-center text-center p-2 md:p-3 lg:p-4 md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            <p className="text-base md:text-lg lg:text-xl font-medium">
                                                {card.title}
                                            </p>
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;