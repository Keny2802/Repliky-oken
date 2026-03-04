"use client";

import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Link from "next/link";

import TapAnimation from "./TapAnimation";

interface CtaType {
    className?: string;
    href: string;
    target?: "_blank" | "_self" | "_top" | "_parent";
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: ReactNode;
};

const Cta = ({ ...props }: CtaType) => {
    const {
        className,
        target,
        children
    } = props;
    return (
        <Fragment>
            <Link
            {...props}
            target={target}
            className={clsx(`${className || ""} w-full md:min-w-75 md:max-w-100 text-base md:text-lg lg:text-[19px] rounded-3xl`)}>
                <TapAnimation>
                    {children}
                </TapAnimation>
            </Link>
        </Fragment>
    );
};

export default Cta;