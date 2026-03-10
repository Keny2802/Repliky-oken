"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

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
    "/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/1.avif",
    "/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/2.avif",
    "/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/3.avif",
    "/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/4.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-1.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-2.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-3.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-4.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-5.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-6.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-7.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-8.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-9.avif",
    // "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-10.avif",
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
                        {/* <Heading className="max-w-xl text-start">
                            Okna se skutečným vakuovým sklem Fineo od firmy AGC.
                        </Heading> */}
                        <Wrapper>
                            <Heading className="max-w-[20ch] text-start text-balance">
                            Okna se skutečným vakuovým sklem Fineo od firmy AGC.
                        </Heading>
                            <Subheading className="max-w-3xl text-start">
                                Sklo, které má uvnitř skutečné vakuum existuje, vyrábí jej firma AGC v Belgii. Častým omylem bývá
                                informace o vakuu ve dvojsklech a trojsklech, není tam vakuum ale nejčastěji plyn argon. Fineo je
                                jediné sklo v Evropě, které vakuum má. Jedná se o tenké sklo s lepšími izolačními parametry než
                                trojsklo. Fineo má uvnitř mezeru, kde je vakuum (cca 0,1mm) a aby se nezhroutilo má v ploše
                                malinkaté můstky, které sklo vyztužují. Toto vakuové sklo lze osadit do všech našich oken, máme
                                s ním zkušenosti. Obrovskou výhodou vakuového skla jsou vynikající tepelné a hlukové izolační
                                vlastnosti při zachování tenkého skla, Fineo má sílu 4-8 mm. Nevýhodou je bohužel vysoká cena skla a
                                delší doba dodání.
                            </Subheading>
                            <Wrapper className="mt-2 md:mt-4">
                                <h3 className="text-2xl md:text-3xl font-semibold">
                                    Zde se podívejte
                                </h3>
                                <Link
                                href="https://www.agc-fenestra.cz/produkty-fineo-vakuove-izolacni-sklo"
                                target="_blank"
                                className="text-[#5495ff]">
                                    https://www.agc-fenestra.cz/produkty-fineo-vakuove-izolacni-sklo
                                </Link>
                            </Wrapper>
                        </Wrapper>
                    </FlexCol>
                    <Wrapper className="mt-2 md:mt-4 flex justify-center">
                        <Image
                        width={800}
                        height={800}
                        // src="/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-1.avif"
                        src="/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/1.avif"
                        alt="Ukázka produktu okna se skutečným vakuovým sklem fineo od firmy AGC | replikyoken.cz Jaroslav Heindinger"
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
                                        alt={`${index + 1}. Ukázka produktu okna se skutečným vakuovým sklem fineo od firmy AGC | replikyoken.cz Jaroslav Heindinger`}
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