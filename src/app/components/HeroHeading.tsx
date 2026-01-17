import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface HeroHeadingType {
    className?: string;
    children?: ReactNode;
};

const HeroHeading = ({ ...props }: HeroHeadingType) => {
    const {
        className,
        children
    } = props;
    return (
        <Fragment>
            <h1 className={clsx(`${className || ""} text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wide max-w-7xl`)}>
                {children}
            </h1>
        </Fragment>
    );
};

export default HeroHeading;