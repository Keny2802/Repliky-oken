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
// import Link from "next/link";

// variants of text and heading
import Wrapper from "./Wrapper";
import ListItem from "./ListItem";
import Link from "next/link";
import BodyText from "./BodyText";

const PathLink = () => {
    const pathname = usePathname();

    const productIndex = ProductPagesSet.findIndex((product) => pathname === product.href); // Najdeme si daný index produktu který se rovná pathName
    const currentProduct = ProductPagesSet[productIndex]; // Určíme daný produkt podle aktuálního indexu
    const previousProduct = ProductPagesSet[productIndex - 1 % ProductPagesSet.length];
    const firstProductIndex = ProductPagesSet[0];
    const nextProduct = ProductPagesSet[productIndex + 1 % ProductPagesSet.length]; // Vyhledáme další produkt podle aktuálního produktu + 1
    const firstProduct = ProductPagesSet[0]; // Vyhledáme první produkt
    const lastProduct = ProductPagesSet[ProductPagesSet.length - 1]; // Vyhledáme poslední produkt

    // const firstProductIndex = productIndex === 0;


    return (
        <Fragment>
            <Wrapper className="mx-4 md:mx-6 my-4 md:my-6 border-b border-gray-200 md:max-w-max flex md:items-center flex-col md:flex-row gap-2 md:gap-4 lg:gap-6">
                {
                    // productIndex === 0 ? (
                    //     firstProduct && (
                    //         <ListItem className="ml-2 md:ml-3 lg:ml-4">
                    //             <Link
                    //             href={firstProduct.href}>
                    //                 {firstProduct.title}
                    //             </Link>
                    //         </ListItem>
                    //     )
                    // ) : (
                    //     previousProduct && (
                    //         <ListItem className="ml-2 md:ml-3 lg:ml-4">
                    //             <Link
                    //             href={previousProduct.href}>
                    //                 {previousProduct.title}
                    //             </Link>
                    //         </ListItem>
                    //     )
                    // )
                    previousProduct && (
                        <ListItem className="ml-2 md:ml-3 lg:ml-4">
                            <Link
                            href={previousProduct.href}>
                                {previousProduct.title}
                            </Link>
                        </ListItem>
                    )
                }
                {/* <BodyText>
                    /
                </BodyText> */}
                {
                    currentProduct && (
                        <ListItem className="list-none">
                            <Link
                            href={currentProduct.href}
                            className="text-[#e40209]">
                                {currentProduct.title}
                            </Link>
                        </ListItem>
                    )
                }
                {/* {
                    productIndex !== ProductPagesSet.length - 1 && (
                        <BodyText>
                            /
                        </BodyText>
                    )
                } */}
                {/* <BodyText>
                    /
                </BodyText> */}
                {
                    productIndex !== ProductPagesSet.length - 1 ? (
                        nextProduct && (
                            <ListItem className="ml-2 md:ml-3 lg:ml-4">
                                <Link
                                href={nextProduct.href}>
                                {nextProduct.title}
                                </Link>
                            </ListItem>
                        )
                    ) : (
                        firstProduct && (
                            <ListItem className="ml-2 md:ml-3 lg:ml-4">
                                <Link
                                href={firstProduct.href}>
                                {firstProduct.title}
                            </Link>
                            </ListItem>
                        )
                    )
                }
            </Wrapper>
        </Fragment>
    );
};

export default PathLink;