"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type props = {
    className?: string;
    id?: string;
};

const Logo = ({
    className,
    id
}: props) => {
    const pathName = usePathname();
    const isHome = pathName === "/" ? "" : "/";

    return (
        <Fragment>
            <Link
                href={isHome}>
                <Image
                    width={320}
                    height={320}
                    src="/assets/logo/clean-logo.avif"
                    alt="Jaroslav Heindinger Replikyoken.cz Logo"
                    priority={true}
                    draggable={false}
                    className={clsx(className, "max-w-[250px] max-h-[250px] lg:max-w-[320px] lg:min-h-[130px] w-full")}
                    id={id}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;