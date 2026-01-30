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
                src="/assets/hero/hero.avif"
                alt="Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full max-h-screen object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/60"></Wrapper>
                <Wrapper className="p-3 md:p-3.5 lg:p-4 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3.5 lg:gap-6">
                    <HeroHeading>
                        Dokonalé repliky oken pro váš domov
                    </HeroHeading>
                    <Subheading>
                        Kvalitní, precizní a přesně na míru - ať vaše okna vypadají jako nová.
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
                                            {/* <CheckIcon className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 text-[#0dff9a]" /> */}
                                            <Icon>
                                                <CheckIcon className="text-[#0dff9a]" />
                                            </Icon>
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
                                        className="bg-[#362315] text-white last:bg-white last:text-black">
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