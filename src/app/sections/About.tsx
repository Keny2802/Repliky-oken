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
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import FlexRow from "../components/FlexRow";
import Flex from "../components/Flex";
import Cta from "../components/Cta";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Padding from "../components/Padding";

const About = () => {
    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-8 bg-white shadow-lg">
                <FlexCol className="justify-center items-center">
                    <Heading>
                        O nás
                    </Heading>
                    <Subheading>
                        Každé okno z naší výroby je originál. Jsme malá rodinná firma, vyrábíme s respektem k řemeslu a
                        přání zákazníka. Každému oknu věnujeme maximální péči a chceme, aby vytvořené výrobky sloužily
                        výborně a dlouho. Firma úspěšně funguje druhou generaci a všechny naše zkušenosti promítáme do
                        naší práce.
                    </Subheading>
                </FlexCol>
                <FlexRow>
                    <Image
                    width={400}
                    height={400}
                    src="/assets/about/about.JPEG"
                    alt="O nás | Repliky oken Jaroslav Heindinger"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="rounded-2xl"
                    />
                    <FlexCol className="justify-center items-center">
                        {
                            [
                                "Během celé akce budete v kontaktu s jedním člověkem. Profesionálním truhlářem, který řídí návrh, výrobu, montáž, záruku i servis. Celý proces je pod kontrolou a žádný detail se neztratí.",
                                "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme"
                            ].map((text, index) => {
                                return (
                                    <Subheading key={index}>
                                        {text}
                                    </Subheading>
                                );
                            })
                        }
                        <Flex className="flex-wrap">
                            {Gallery.map((card, index) => {
                                return (
                                    <Image
                                    key={index}
                                    width={100}
                                    height={100}
                                    src={card.image}
                                    alt={card.alt}
                                    loading="lazy"
                                    decoding="async"
                                    draggable={false}
                                    className="rounded-md"
                                    />
                                );
                            })}
                        </Flex>
                        <Cta
                        href="#nabidka"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "#nabidka");
                        }}
                        className="mt-2 md:mt-3 lg:mt-4 bg-[#322e2e] text-white text-center">
                            <Padding>
                                Zjistit více
                            </Padding>
                        </Cta>
                    </FlexCol>
                </FlexRow>
            </Wrapper>
        </Fragment>
    );
};

export default About;