import {
    Fragment
} from "react";
import {
    ChevronRight
} from "lucide-react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import MarginTop from "../components/MarginTop";
import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import SmallerHeading from "../components/SmallerHeading";
import Img from "../components/Img";
import Flex from "../components/Flex";

const products = [
    {
        image: "/assets/fotky/produkty/spaletova-okna/spaletova-okna-22.avif",
        alt: "Produkt špaletová okna společnosti Repliky Oken",
        title: "Špaletová Okna",
        href: "/produkty/spaletova-okna"
    },
    {
        image: "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-2.avif",
        alt: "Produkt jednorámových oken s izolačním zasklením společnosti Repliky Oken",
        title: "Jednorámové okna s izolačním zasklením",
        href: "/produkty/jedno-ramova-okna-s-izolacnim-sklem-trojsklo-dvojsklo"
    },
    {
        image: "/assets/fotky/produkty/okna-se-skutecnym-vakuovym-sklem/okna-se-skutecnym-vakuovym-sklem-4.avif",
        alt: "Produkt okna se skutečným vykuovým sklem společnosti Repliky Oken ",
        title: "Okna se skutečným vakuovým sklem",
        href: "/produkty/okna-se-skutecnym-vakuovym-sklem-fineo-od-firmy-agc"
    },
    {
        image: "/assets/fotky/produkty/interierove-dvere/interierove-dvere-20.avif",
        alt: "Produkt interiérové dveře společnosti Repliky Oken",
        title: "Interiérové dveře",
        href: "/produkty/interierove-dvere"
    },
    {
        image: "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-8.avif",
        alt: "Produkt vchodové dveře do bytu společnosti Repliky Oken",
        title: "Vchodové dveře do bytu",
        href: "/produkty/vchodove-dvere"
    }
];

const Products = () => {
    return (
        <Fragment>
            <Wrapper
            className="p-4 md:p-6 lg:p-8 bg-white shadow-lg"
            id="produkty">
                <ScrollAnimation>
                    <Wrapper>
                        <FlexCol className="justify-center items-center">
                            <Heading>
                                Produkty
                            </Heading>
                            <Subheading>
                                Podívejte se na naší širokou nabídku oken.
                            </Subheading>
                        </FlexCol>
                        <MarginTop>
                            <Flex className="justify-center items-center flex-wrap gap-4 md:gap-5 lg:gap-6">
                                {
                                    products.map((card, index) => {
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
                                            <RelativeOverlayWrapper
                                            key={index}
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
                                                            <Link
                                                            href={card.href}
                                                            target="_blank"
                                                            className="p-2.5 md:p-3 lg:p-4 absolute bottom-5 right-5 md:right-0 bg-[#e40209] text-white rounded-md cursor-pointer">
                                                                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                                            </Link>
                                                        </RelativeOverlayWrapper>
                                                    </MarginTop>
                                                </Wrapper>
                                            </RelativeOverlayWrapper>
                                        );
                                    })
                                }
                            </Flex>
                        </MarginTop>
                    </Wrapper>
                </ScrollAnimation>
            </Wrapper>
        </Fragment>
    );
};

export default Products;