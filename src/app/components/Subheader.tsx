import {
  Fragment
} from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Flex from "./Flex";

const Subheader = () => {
    return (
        <Fragment>
            <header className="bg-white shadow-lg">
                <Wrapper className="p-2 md:p-2.5 lg:p-3">
                    <Flex className="hidden md:block">
                        <ul className="header-list">
                            <Flex className="justify-center">
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
                                                <li className="header-item">
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
                </Wrapper>
            </header>
        </Fragment>
    );
};

export default Subheader;