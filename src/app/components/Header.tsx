import {
  Fragment
} from "react";
import Link from "next/link";

import Padding from "./Padding";
import Flex from "./Flex";
import Logo from "./Logo";

const Header = () => {
    return (
        <Fragment>
            <header className="bg-white shadow-lg">
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
                                                <li className="text-base md:text-[17px] lg:text-lg font-medium header-item">
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
                    </Flex>
                </Padding>
            </header>
        </Fragment>
    );
};

export default Header;