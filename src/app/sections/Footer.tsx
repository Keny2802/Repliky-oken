import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import ContactInfo from "../components/ContactInfo";

const Footer = () => {
    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-12 bg-[#322e2e] text-white">
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
                                            text: "Jak to probíhá",
                                            href: "/jak-to-probiha"
                                        },
                                        {
                                            text: "Galerie",
                                            href: "/galerie"
                                        },
                                        {
                                            text: "Naše realizace",
                                            href: "/nase-realizace"
                                        },
                                        {
                                            text: "O nás",
                                            href: "/o-nas"
                                        },
                                        {
                                            text: "Kontakt",
                                            href: "/kontakt"
                                        }
                                    ].map((link, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <li className="text-base md:text-[17px] lg:text-lg font-medium footer-header-item">
                                                    <Link
                                                    href={link.href}>
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
                    <ContactInfo />
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;