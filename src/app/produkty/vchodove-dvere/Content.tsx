"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import Image from "next/image";

import ContactHeader from "@/app/components/contact-header/ContactHeader";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import Atc from "@/app/sections/Atc";
import Wrapper from "@/app/components/Wrapper";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import FlexCol from "@/app/components/FlexCol";
import FlexRow from "@/app/components/FlexRow";
import Heading from "@/app/components/Heading";
import Subheading from "@/app/components/Subheading";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import Carousel from "@/app/components/Carousel";

const Gallery = [
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-1.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-2.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-3.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-4.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-5.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-6.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-7.avif",
    "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-8.avif",
    // "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-9.avif",
];

const Content = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
        
    useEffect(() => {
        const body = document.body;

        if (activeIndex !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [activeIndex]);

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Subheader />
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <ScrollAnimation>
                    <FlexCol className="items-center">
                        <Heading>
                            Vchodové dveře do bytů
                        </Heading>
                        <Subheading className="max-w-3xl text-start">
                            <span className="block mt-2">
                                Repliky vchodových dveří do bytu vyrábíme s tepelnou a hlukovou izolací a zabezpečením.
                            </span>
                            Technologie naší výroby je založena na pevné konstrukci dveřního rámu stejně jako u interiérových
                            dveří. Spoje zásadně provádíme vyklínovaným čepem a dlabem tak, jak to dělali mistři truhláři při
                            výrobě Vašich původních dveří. Pevná konstrukce zajišťuje velmi dlouhou životnost.
                        </Subheading>
                        <ul className="point-list">
                            {
                                [
                                    "Zesílená konstrukce dveří až 70 mm pro zvukovou a tepelnou izolaci.",
                                    "Vícebodový bezpečnostní dveřní zámek MACO.",
                                    "Bezpečnostní dveřní kování (klika).",
                                    "Masivní dveřní kazety nebo kazety s polyuretanovou vložkou (PUR výplně) pro tepelnou.",
                                    "izolaci a odlehčení.",
                                    "Bezpečnostní zasklení lepeným sklem (connex).",
                                ].map((point, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <li className="list-disc point-list-item">
                                                {point}
                                            </li>
                                        </Fragment>
                                    );
                                })
                            }
                        </ul>
                    </FlexCol>
                    <Wrapper className="mt-2 md:mt-4 flex justify-center">
                        <Image
                        width={600}
                        height={600}
                        src="/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-1.avif"
                        alt="Ukázka produktu špaletových oken z replikyoken.cz | Jaroslav Heindinger"
                        className="max-h-[600px] object-cover cursor-pointer"
                        onClick={() => setActiveIndex(0)}
                        />
                    </Wrapper>
                    <FlexRow className="flex-wrap justify-center items-center w-full">
                        {
                            Gallery.slice(1).map((img, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Image
                                        width={200}
                                        height={200}
                                        src={img}
                                        alt={`${index + 1}. Ukázka produktu vchodových dveří | replikyoken.cz Jaroslav Heindinger`}
                                        className="w-full max-h-[210px] md:w-50 md:h-50 object-cover cursor-pointer rounded-md"
                                        onClick={() => setActiveIndex(index + 1)}
                                        />
                                    </Fragment>
                                );
                            })
                        }
                    </FlexRow>
                </ScrollAnimation>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
            {
                activeIndex !== null && (
                    <Fragment>
                        <Carousel
                        carouselSet={Gallery}
                        startIndex={activeIndex}
                        onClose={() => setActiveIndex(null)}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Content;