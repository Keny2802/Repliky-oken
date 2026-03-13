"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    ProductPagesSet
} from "./ProductPagesSet";
import Link from "next/link";

// variants of text and heading
import Wrapper from "./Wrapper";
import BodyText from "./BodyText";

const PathLink = () => {
    const pathname = usePathname();

    const productIndex = ProductPagesSet.findIndex((product) => pathname === product.href); // Najdeme si daný index produktu který se rovná pathName
    const currentProduct = ProductPagesSet[productIndex]; // Určíme daný produkt podle aktuálního indexu
    const previousProduct = ProductPagesSet[productIndex - 1 % ProductPagesSet.length];
    const nextProduct = ProductPagesSet[productIndex + 1 % ProductPagesSet.length]; // Vyhledáme další produkt podle aktuálního produktu + 1
    const firstProduct = ProductPagesSet[0]; // Vyhledáme první produkt

    return (
        <Fragment>
            <Wrapper className="mx-4 md:mx-6 my-4 md:my-6 border-b border-gray-200 md:max-w-max flex items-center lg:flex-row gap-1 md:gap-2 lg:gap-3">
                {
                    currentProduct && (
                        <Link
                        href={currentProduct.href}
                        className="text-[#e40209]">
                            {currentProduct.title}
                        </Link>
                    )
                }
                {/* {
                    productIndex !== ProductPagesSet.length - 1 && (
                        <BodyText>
                            /
                        </BodyText>
                    )
                } */}
                <BodyText>
                    /
                </BodyText>
                {
                    productIndex !== ProductPagesSet.length - 1 ? (
                        nextProduct && (
                            <Link
                            href={nextProduct.href}>
                                {nextProduct.title}
                            </Link>
                        )
                    ) : (
                        firstProduct && (
                            <Link
                            href={firstProduct.href}>
                                {firstProduct.title}
                            </Link>
                        )
                    )
                }
            </Wrapper>
        </Fragment>
    );
};

export default PathLink;