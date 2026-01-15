"use client";

import {
  Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    const pathName = usePathname();
    const isHome = pathName === "/" ? "" : "/";

    return (
        <Fragment>
            <Link
            href={isHome}>
                <Image
                width={250}
                height={250}
                src="/assets/logo/logo.png"
                alt="Jaroslav Heindinger Replikyoken.cz Logo"
                loading="lazy"
                decoding="async"
                draggable={false}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;