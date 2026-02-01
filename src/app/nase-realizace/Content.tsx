import {
    Fragment
} from "react";
import {
    GalleryRybna
} from "./GalleryRybna";
import {
    GalleryHradesinska
} from "./GalleryHradesinska";
import Image from "next/image";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Atc from "../sections/Atc";
import Wrapper from "../components/Wrapper";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import SectionHeading from "../components/SectionHeading";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { GalleryPysely } from "./GalleryPysely";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
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
                <FlexCol>
                    <Wrapper>
                        <SectionHeading>
                            Praha ulice Rybná repliky oken
                        </SectionHeading>
                        <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                        {
                            GalleryRybna.map((card, index) => {
                                const titleIndex = index + 1;
                                
                                return (
                                    <Fragment key={index}>
                                        <Wrapper className="relative group cursor-pointer">
                                            <Image
                                            width={300}
                                            height={300}
                                            src={card.image}
                                            alt={card.alt}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="w-full md:w-75 md:h-75 object-cover rounded-md cursor-pointer"
                                            />
                                            <Wrapper className="rounded-md bg-black/50 text-white absolute inset-0 flex justify-center items-center text-center p-2 md:p-3 lg:p-4 md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                <p className="text-base md:text-lg lg:text-xl font-medium">
                                                    {`${titleIndex}. Ukázka - ${card.title}`}
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    </Wrapper>
                    <Wrapper>
                        <SectionHeading>
                            Okna ulice Hradešínská Praha 10
                        </SectionHeading>
                        <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                            {
                                GalleryHradesinska.map((card, index) => {
                                    const titleIndex = index + 1;
                                    
                                    return (
                                        <Fragment key={index}>
                                            <Wrapper className="relative group cursor-pointer">
                                                <Image
                                                width={300}
                                                height={300}
                                                src={card.image}
                                                alt={card.alt}
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className="w-full md:w-75 md:h-75 object-cover rounded-md cursor-pointer"
                                                />
                                                <Wrapper className="rounded-md bg-black/50 text-white absolute inset-0 flex justify-center items-center text-center p-2 md:p-3 lg:p-4 md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                    <p className="text-base md:text-lg lg:text-xl font-medium">
                                                        {`${titleIndex}. Ukázka - ${card.title}`}
                                                    </p>
                                                </Wrapper>
                                            </Wrapper>
                                        </Fragment>
                                    );
                                })
                            }
                        </Wrapper>
                    </Wrapper>
                    <Wrapper>
                        <SectionHeading>
                            Pyšely - rekonstrukce historické vily
                        </SectionHeading>
                        <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                            {
                                GalleryPysely.map((card, index) => {
                                    const titleIndex = index + 1;
                                    
                                    return (
                                        <Fragment key={index}>
                                            <Wrapper className="relative group cursor-pointer">
                                                <Image
                                                width={300}
                                                height={300}
                                                src={card.image}
                                                alt={card.alt}
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className="w-full md:w-75 md:h-75 object-cover rounded-md cursor-pointer"
                                                />
                                                <Wrapper className="rounded-md bg-black/50 text-white absolute inset-0 flex justify-center items-center text-center p-2 md:p-3 lg:p-4 md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                    <p className="text-base md:text-lg lg:text-xl font-medium">
                                                        {`${titleIndex}. Ukázka - ${card.title}`}
                                                    </p>
                                                </Wrapper>
                                            </Wrapper>
                                        </Fragment>
                                    );
                                })
                            }
                        </Wrapper>
                    </Wrapper>
                </FlexCol>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;