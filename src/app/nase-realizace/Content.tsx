"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    GalleryRybna
} from "./GalleryRybna";
import {
    GalleryHradesinska
} from "./GalleryHradesinska";
import {
    GalleryPysely
} from "./GalleryPysely";
import Image from "next/image";

import ContactHeader from "../components/contact-header/ContactHeader";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Atc from "../sections/Atc";
import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import SectionHeading from "../components/SectionHeading";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Carousel from "../components/Carousel";

const Content = () => {
    // type ActiveCarousel = {
    //     gallery: "rybna" | "hradesinska" | "pysely";
    //     index: number;
    // } | null;
    // const [activeCarousel, setActiveCarousel] = useState<ActiveCarousel>(null);
    const [activeIndex1, setActiveIndex1] = useState<number | null>(null);
    // const [activeIndex2, setActiveIndex2] = useState<number | null>(null);
    // const [activeIndex3, setActiveIndex3] = useState<number | null>(null);
    
    // useEffect(() => {
    //     const body = document.body;
        
    //     if (activeIndex1 !== null || activeIndex2 !== null || activeIndex3 !== null) {
    //         body.style.overflow = "hidden";
    //     } else {
    //         body.style.overflow = "";
    //     }

    //     return () => {
    //         body.style.overflow = "";
    //     };
    // }, [activeIndex1, activeIndex2, activeIndex3]);

    useEffect(() => {
        const body = document.body;
        
        if (activeIndex1 !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }

        return () => {
            body.style.overflow = "";
        };
    }, [activeIndex1]);

    // useEffect(() => {
    //     const body = document.body;
        
    //     if (activeCarousel !== null) {
    //         body.style.overflow = "hidden";
    //     } else {
    //         body.style.overflow = "";
    //     }

    //     return () => {
    //         body.style.overflow = "";
    //     };
    // }, [activeCarousel]);

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
                                                // onClick={() => setActiveCarousel({ gallery: "rybna", index: index })}
                                                onClick={() => setActiveIndex1(index)}
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
                                                    // onClick={() => setActiveCarousel({ gallery: "hradesinska", index: index })}
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
                                                    // onClick={() => setActiveCarousel({ gallery: "pysely", index: index })}
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
                </ScrollAnimation>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
            {/* {
                activeCarousel !== null && (
                    <Fragment>
                        <Carousel
                        carouselSet={
                            activeCarousel.gallery === "rybna"
                            ? GalleryRybna.map((item) => item.image)
                            : activeCarousel.gallery === "hradesinska"
                            ? GalleryHradesinska.map((item) => item.image)
                            : GalleryPysely.map((item) => item.image)
                        }
                        startIndex={activeCarousel.index}
                        onClose={() => setActiveCarousel(null)}
                        />
                    </Fragment>
                )
            } */}
            {
                activeIndex1 !== null && (
                    <Fragment>
                        <Carousel
                        carouselSet={GalleryRybna.map((item) => item.image)}
                        startIndex={activeIndex1}
                        onClose={() => setActiveIndex1(null)}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Content;