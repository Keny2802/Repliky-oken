"use client";

import {
    useState,
  Fragment
} from "react";
import {
    Menu,
    XIcon
} from "lucide-react";
import Link from "next/link";

import Padding from "./Padding";
import Flex from "./Flex";
import Logo from "./Logo";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);

    return (
        <Fragment>
            <header className="bg-[#362315] text-white shadow-lg border-b border-gray-200">
                <Padding>
                    <Flex className="justify-between">
                        <Logo />
                        <ul className="hidden md:block header-list">
                            <Flex>
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
                                                <li className="text-base md:text-[17px] lg:text-lg header-item">
                                                    <Link
                                                    href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                            </Flex>
                        </ul>
                        {
                            isMobileMenu === false ? (
                                <Icon
                                className="md:hidden cursor-pointer"
                                onClick={() => {
                                    setMobileMenu(prev => !prev);
                                }}>
                                    <Menu />
                                </Icon>
                            ) : (
                                <Icon
                                className="md:hidden cursor-pointer"
                                onClick={() => {
                                    setMobileMenu(false);
                                }}>
                                    <XIcon />
                                </Icon>
                            )
                        }
                    </Flex>
                </Padding>
            </header>
            {
                isMobileMenu && (
                    <MobileMenu
                    isMobileMenu={isMobileMenu}
                    setMobileMenu={setMobileMenu}
                    />
                )
            }
        </Fragment>
    );
};

export default Header;