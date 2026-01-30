import {
    Fragment
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";
import FlexCol from "./FlexCol";

type MobileMenuType = {
    isMobileMenu: boolean;
    setMobileMenu: (isMobileMenu: boolean) => void;
    className?: string;
};

const MobileMenu = ({ ...props }: MobileMenuType) => {
    const {
        isMobileMenu,
        setMobileMenu,
        className
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(
                "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out",
                isMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            onClick={() => {
                setMobileMenu(false);
            }}></Wrapper>
            <Wrapper className={clsx(
            "fixed top-0 left-0 bg-[#362315] shadow-md w-[300px] h-full z-50 transform transition-transform duration-300 ease-in-out",
            isMobileMenu ? "translate-x-0 md:-translate-x-full" : "-translate-x-full",
            className)}>
                <Padding>
                    <Logo />
                    <ul className="mt-4 md:mt-6 lg:mt-8 header-list">
                        <FlexCol>
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
                                                <li className="text-base md:text-[17px] lg:text-lg text-white mobile-menu-item">
                                                    <Link
                                                    href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                        </FlexCol>
                    </ul>
                    <Wrapper className="mt-2 border-t border-gray-300"></Wrapper>
                    <ul className="mt-4 md:mt-6 lg:mt-8 header-list">
                        <FlexCol>
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
                                                <li className="text-base md:text-[17px] lg:text-lg text-white mobile-menu-item">
                                                    <Link
                                                    href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                        </FlexCol>
                    </ul>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;