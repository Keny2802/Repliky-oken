"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    Gallery
} from "../o-nas/Gallery";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import MarginTop from "../components/MarginTop";
import BodyText from "../components/BodyText";
import List from "../components/List";
import ListItem from "../components/ListItem";
import FlexRow from "../components/FlexRow";
import Flex from "../components/Flex";
import Cta from "../components/Cta";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Padding from "../components/Padding";
import Carousel from "../components/Carousel";

const About = () => {
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
            <Wrapper className="p-4 md:p-6 lg:p-8 border-t border-gray-200 bg-white shadow-lg">
                <ScrollAnimation>
                    <Wrapper>
                        <FlexCol className="justify-center items-center">
                            <Heading>
                                O nás
                            </Heading>
                            <Subheading className="max-w-3xl">
                                Každé okno z naší výroby je originál. Jsme malá rodinná firma, vyrábíme s respektem k řemeslu a přání zákazníka. Každému oknu věnujeme maximální péči a chceme, aby vytvořené výrobky sloužily výborně a dlouho. Firma úspěšně funguje druhou generaci a všechny naše zkušenosti promítáme do naší práce.
                            </Subheading>
                        </FlexCol>
                    <FlexRow>
                        <Image
                        width={400}
                        height={400}
                        src="/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-2.avif"
                        alt="O nás | Repliky oken Jaroslav Heindinger"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        onClick={() => setActiveIndex(0)}
                        className="w-full max-h-[300px] md:max-w-[400px] md:max-h-[400px] object-cover rounded-2xl cursor-pointer"
                        />
                        <FlexCol className="justify-center items-center">
                                <MarginTop>
                                    <BodyText className="max-w-4xl">
                                        Během celé akce budete v kontaktu s jedním člověkem. Profesionálním truhlářem, který řídí návrh, výrobu, montáž, záruku i servis. Celý proces je pod kontrolou a žádný detail se neztratí.
                                    </BodyText>
                                    <MarginTop>
                                        <List className="ml-4 md:ml-6 lg:ml-8">
                                            {
                                                [
                                                    "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme.",
                                                    "Rekonstrukce bytů - výměna všech výplní otvorů.",
                                                    "Repliky oken a dveří v historických vilách a domech.",
                                                    "Okna v činžovních domech v památkových oblastech."
                                                ].map((listItem, index) => {
                                                    return (
                                                        <ListItem key={index}>
                                                            {listItem}
                                                        </ListItem>
                                                    );
                                                })
                                            }
                                        </List>
                                    </MarginTop>
                                </MarginTop>
                                <Flex className="max-w-5xl flex-wrap">
                                    {Gallery.map((card, index) => {
                                        return (
                                            <Image
                                            key={index}
                                            width={200}
                                            height={200}
                                            src={card.image}
                                            alt={card.alt}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            onClick={() => setActiveIndex(index)}
                                            className="w-full max-h-[210px] md:w-50 md:h-50 object-cover rounded-md cursor-pointer"
                                            />
                                        );
                                    })}
                                </Flex>
                            </FlexCol>
                        </FlexRow>
                    </Wrapper>
                    {/* <Wrapper className="flex justify-center">
                        <Cta
                        href="#nabidka"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "#nabidka");
                        }}
                        className="flex justify-center items-center w-full mt-2 md:mt-4 lg:mt-6 bg-[#f5f2e8] text-black text-center border border-gray-200">
                            <Padding className="bg-[#f5f2e8]">
                                Zjistit více
                            </Padding>
                        </Cta>
                    </Wrapper> */}
                </ScrollAnimation>
            </Wrapper>
            {
                activeIndex !== null && (
                    <Fragment>
                        <Carousel
                        carouselSet={Gallery.map((item) => item.image)}
                        startIndex={activeIndex}
                        onClose={() => setActiveIndex(null)}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default About;