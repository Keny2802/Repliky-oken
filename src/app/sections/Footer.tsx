import {
    Fragment
} from "react";
import {
    EnvelopeIcon,
    PhoneArrowUpRightIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Padding from "../components/Padding";

const Footer = () => {
    return (
        <Fragment>
            <Wrapper className="p-12 bg-[#322e2e] text-white">
                <Flex className="md:justify-between items-start md:items-center flex-col md:flex-row">
                    <Wrapper>
                        <p className="text-2xl font-bold">
                            Navigace webu
                        </p>
                        <ul className="footer-header-list">
                            <Wrapper className="mt-2 md:mt-2.5 lg:mt-4 flex flex-col gap-2 md:gap-2.5 lg:gap-1.5">
                                {
                                    [
                                        {
                                            text: "Domů",
                                            href: "#domov"
                                        },
                                        {
                                            text: "Jak to probíhá",
                                            href: "/jak-to-probiha"
                                        },
                                        {
                                            text: "O nás",
                                            href: "/o-nas"
                                        },
                                        {
                                            text: "Naše realizace",
                                            href: "/nase-realizace"
                                        },
                                        {
                                            text: "Kontakt",
                                            href: "/kontakt"
                                        }
                                    ].map((link, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <li className="footer-header-item">
                                                    <Link
                                                    href={link.href}
                                                    className="footer-header-link">
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                            </Wrapper>
                        </ul>
                        <ul className="mt-4 md:mt-5 lg:mt-6 footer-header-list">
                            <Wrapper className="mt-2 md:mt-2.5 lg:mt-4 flex flex-col gap-2 md:gap-2.5 lg:gap-1.5">
                                {
                                    [
                                        {
                                            text: "Špaletová okna",
                                            href: "/spaletova-okna"
                                        },
                                        {
                                            text: "Vchodové dveře",
                                            href: "/vchodove-dvere"
                                        },
                                        {
                                            text: "Interiérové dveře",
                                            href: "/interierove-dvere"
                                        }
                                    ].map((link, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <li className="footer-header-item">
                                                    <Link
                                                    href={link.href}
                                                    className="footer-header-link">
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                            </Wrapper>
                        </ul>
                    </Wrapper>
                    <Wrapper className="p-3.5 md:p-4 lg:p-4.5 w-full md:w-max bg-white/10 rounded-md">
                        <Wrapper className="mt-3 md:mt-3 5 lg:mt-4 flex justify-center items-center flex-col gap-3 md:gap-3 5 lg:gap-4">
                            <h3 className="text-2xl md:text-3xl font-medium">
                                Ing. Jaroslav Heindinger
                            </h3>
                            <Link
                            href="mailto:heidinger@replikyoken.cz">
                                <Flex>
                                    <EnvelopeIcon className="h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8 text-white" />
                                    heidinger@replikyoken.cz
                                </Flex>
                            </Link>
                            <Link
                            href="tel:+420604197497">
                                <Flex>
                                    <PhoneArrowUpRightIcon className="h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8 text-white" />
                                    +420 604 197 497
                                </Flex>
                            </Link>
                            <Link
                            href="https://www.google.com/maps/dir/50.102474,14.5027632/Na+Z%C3%A1jezdu+2131%2F9,+101+00+Vinohrady"
                            target="_blank">
                                Praha 10, Na Zájezdu 2131/9, 101 00, Vinohrady
                            </Link>
                            <p className="text-base">
                                Pondělí - Pátek 08:00 - 16:00
                            </p>
                            <p className="text-base">
                                IČO 87 42 43 47, nejsem plátce DPH
                            </p>
                            <Link
                            href="tel:+420604197497"
                            className="block mt-3 md:mt-3.5 lg:mt-4 w-full md:min-w-75 md:max-w-100 bg-[#322e2e] text-white rounded-3xl">
                                <Padding>
                                    Zavolejte ještě dnes
                                </Padding>
                            </Link>
                        </Wrapper>
                    </Wrapper>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;