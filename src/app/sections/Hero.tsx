"use client";

import {
    Fragment
} from "react";
import {
    CheckIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import HeroHeading from "../components/HeroHeading";
import Subheading from "../components/Subheading";
import Flex from "../components/Flex";
import Icon from "../components/Icon";
import Cta from "../components/Cta";
import Padding from "../components/Padding";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

const Hero = () => {
    return (
        <Fragment>
            <Wrapper className="relative">
                <Image
                width={1000}
                height={1000}
                // src="/assets/hero/hero.avif"
                src="/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif"
                alt="Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full min-h-[100vh] max-h-[200vh] bg-fixed bg-center object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/30"></Wrapper>
                <Wrapper className="p-3 md:p-3.5 lg:p-4 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3.5 lg:gap-6">
                    <HeroHeading>
                        Repliky oken pro váš domov
                    </HeroHeading>
                    <Subheading className="max-w-5xl">
                        {/* Kvalitní, precizní a přesně na míru - ať vaše okna vypadají jako nová. */}
                        Každé okno z naší výroby je originál. Jsme malá rodinná firma, vyrábíme s respektem k řemeslu a
                        přání zákazníka. Každému oknu věnujeme maximální péči a chceme, aby vytvořené výrobky sloužily
                        výborně a dlouho. Firma úspěšně funguje druhou generaci a všechny naše zkušenosti promítáme do
                        naší práce.
                    </Subheading>
                    <Wrapper className="flex flex-col gap-3 md:gap-3 5 lg:gap-4">
                        {
                            [
                                "Vyrábíme s respektem k řemeslu",
                                "30 let zkušeností s okny"
                            ].map((heroBenefit, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Flex>
                                            <CheckIcon className="w-8 md:w-9 lg:w-12 h-8 md:h-9 lg:h-12 text-[#f5f2e8]" />
                                            {/* <Icon>
                                                <CheckIcon className="text-[#f5f2e8]" />
                                            </Icon> */}
                                            <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                                                {heroBenefit}
                                            </p>
                                        </Flex>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <Flex className="w-8/12 md:w-full justify-center md:flex-row flex-col">
                        {
                            [
                                {
                                    text: "Zjistit více",
                                    href: "#nabidka"
                                },
                                {
                                    text: "Nezávazná kalkulace",
                                    href: "#kalkulacka"
                                }
                            ].map((heroCta, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Cta
                                        href={heroCta.href}
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, heroCta.href);
                                        }}
                                        className="bg-[#f5f2e8] text-black last:bg-transparent last:text-white last:border last:border-[#f5f2e8] last:hover:bg-[#f5f2e8] last:hover:text-black transition-colors duration-300 ease-in-out">
                                            <Padding>
                                                {heroCta.text}
                                            </Padding>
                                        </Cta>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;