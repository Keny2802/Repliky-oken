import {
    Fragment
} from "react";
import {
    CheckIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Padding from "../components/Padding";

const Hero = () => {
    return (
        <Fragment>
            <Wrapper className="relative">
                <Image
                width={1000}
                height={1000}
                src="/assets/hero/hero.jpeg"
                alt="Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full max-h-250 object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/60"></Wrapper>
                <Wrapper className="p-3 md:p-3.5 lg:p-4 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3.5 lg:gap-6">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wide max-w-7xl">
                        Dokonalé repliky oken pro váš domov
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl">
                        Kvalitní, precizní a přesně na míru - ať vaše okna vypadají jako nová.
                    </p>
                    <Wrapper className="flex flex-col gap-3 md:gap-3 5 lg:gap-4">
                        {
                            [
                                "Vyrábíme s respektem k řemeslu",
                                "30 let zkušeností s okny"
                            ].map((heroBenefit, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Flex>
                                            <CheckIcon className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 text-[#0dff9a]" />
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
                                        <Link href={heroCta.href}
                                        className="w-full md:min-w-75 md:max-w-100 bg-[#322e2e] text-white last:bg-white last:text-black text-base md:text-lg lg:text-[19px] rounded-3xl">
                                            <Padding>
                                                {heroCta.text}
                                            </Padding>
                                        </Link>
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