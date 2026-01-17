import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Link from "next/link";

interface CtaType {
    className?: string;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: ReactNode;
};

const Cta = ({ ...props }: CtaType) => {
    const {
        className,
        href,
        onClick,
        children
    } = props;
    return (
        <Fragment>
            <Link
            href={href}
            onClick={onClick}
            className={clsx(`${className || ""} w-full md:min-w-75 md:max-w-100 text-base md:text-lg lg:text-[19px] rounded-3xl`)}>
                {children}
            </Link>
        </Fragment>
    );
};

export default Cta;