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
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-1.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-2.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-3.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-5.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-7.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-8.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-9.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-10.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-11.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-12.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-13.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-15.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-16.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-17.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-18.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-19.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-20.avif",
    "/assets/fotky/produkty/interierove-dvere/interierove-dvere-21.avif",
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
                            Interiérové dveře
                        </Heading>
                        <Subheading className="md:max-w-5xl">
                            Věrné repliky klasických a historických dřevěných kazetových a prosklených dveří všech druhů se
                            zárubní. Technologie naší výroby dveří je založena na pevné konstrukci dveřního rámu. Spoje zásadně provádíme vyklínovaným čepem a dlabem tak, jak to dělali mistři truhláři při výrobě Vašich
                            původních dveří. Žádné kolíčky ve spojích nedáváme, takový spoj není kvalitní, jen byl rychle
                            vyrobený. Pevná konstrukce zajišťuje velmi dlouhou životnost.
                            <span className="block mt-2">
                                Vaše stávající dveře přesně zaměříme, případně odvezeme vzorek abychom docílili co nejpřesnější
                                repliky. Pokud máte stávající dveřní kování, lze repasovat a osadit na nové dveře.
                            </span>
                        </Subheading>
                        <ul className="point-list">
                            {
                                [
                                    "Kazetové dveře a dveře s částečným zasklením.",
                                    "Dvoukřídlé dveře.",
                                    "Posuvné dveře jednokřídlé či dvoukřídlé.",
                                    "Dveřní zárubeň obložková se zdobením nebo jednoduchá truhlářská.",
                                    "Zasklení matným sklem či sklem se vzorkem.",
                                    "Zasklení fazetovým sklem.",
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
                        src="/assets/fotky/produkty/interierove-dvere/interierove-dvere-1.avif"
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
                                        alt={`${index + 1}. Ukázka produktu interiérových dveřích | replikyoken.cz Jaroslav Heindinger`}
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