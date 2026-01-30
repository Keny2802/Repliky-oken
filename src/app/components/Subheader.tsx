import {
  Fragment
} from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Flex from "./Flex";

const Subheader = () => {
    return (
        <Fragment>
            <header className="hidden md:block bg-[#362315] text-white shadow-lg">
                <Wrapper className="p-2 md:p-2.5 lg:p-3">
                    <Flex className="justify-center">
                        <ul className="header-list">
                            <Flex className="justify-center">
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