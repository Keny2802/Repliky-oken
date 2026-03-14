"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    useRouter
} from "next/navigation";
import clsx from "clsx";

import Cta from "./Cta";

const Back = ({
    className,
    children
} : {
    className?: string;
    children: ReactNode
}) => {
    const router = useRouter();

    return (
        <Fragment>
            <Cta
            href=""
            className={clsx(className, "p-3 md:p-4 lg:p-4.5 bg-[#87ceeb] text-black back-component")}
            onClick={() => router.back()}>
                {children}
            </Cta>
        </Fragment>
    );
};

export default Back;