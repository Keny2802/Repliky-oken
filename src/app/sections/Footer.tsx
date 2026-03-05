import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import ContactInfo from "../components/ContactInfo";

const Footer = () => {
    const DYNAMIC_YEAR = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-12 bg-white text-black">
                <Flex className="md:justify-between items-start md:items-center flex-col md:flex-row">
                    <Wrapper>
                        <p className="text-2xl uppercase">
                            Odkazy domovské stránky
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
                                                <li className="text-base md:text-[17px] lg:text-lg footer-header-item">
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
                        <p className="mt-2 md:mt-2.5 lg:mt-3 text-2xl uppercase">
                            Produkty
                        </p>
                        <ul className="mt-2 footer-header-list">
                            <Wrapper className="mt-2 md:mt-2.5 flex flex-col gap-2 md:gap-2.5 lg:gap-1.5">
                                {
                                    [
                                        {
                                            text: "Špaletová okna",
                                            href: "/produkty/spaletova-okna"
                                        },
                                        {
                                            text: "Jedno rámová okna",
                                            href: "/produkty/jedno-ramova-okna-s-izolacnim-sklem-trojsklo-dvojsklo"
                                        },
                                        {
                                            text: "Okna se skutečným vakuovým sklem",
                                            href: "/produkty/okna-se-skutecnym-vakuovym-sklem-fineo-od-firmy-agc"
                                        },
                                        {
                                            text: "Interiérové dveře",
                                            href: "/produkty/interierove-dvere"
                                        },
                                        {
                                            text: "Vchodové dveře",
                                            href: "/produkty/vchodove-dvere"
                                        },
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
                        <p className="mt-2 md:mt-2.5 lg:mt-3 text-2xl uppercase">
                            „Právní“ odkazy
                        </p>
                        <ul className="mt-2 footer-header-list">
                            <Wrapper className="mt-2 md:mt-2.5 flex flex-col gap-2 md:gap-2.5 lg:gap-1.5">
                                {
                                    [
                                        {
                                            text: "Obchodní podmínky",
                                            href: "/obchodni-podminky"
                                        },
                                        {
                                            text: "Ochrana osobních údajů",
                                            href: "/ochrana-osobnich-udaju"
                                        },
                                        {
                                            text: "Nastavení cookies",
                                            href: "/nastaveni-cookies"
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
            <Wrapper className="p-2.5 md:p-3 lg:p-4 flex flex-col justify-center items-center gap-2 text-center">
                <p className="text-base">
                    Repliky Oken Jaroslav Heidinger, {DYNAMIC_YEAR}, všechna práva vyhrazena.
                </p>
                <Link
                href="https://vojtaoliva.cz">
                    Web vytvořil Vojtěch Oliva.
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;