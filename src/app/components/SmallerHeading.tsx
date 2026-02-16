import {
    ReactNode,
    Fragment,
} from "react";
import clsx from "clsx";

type SmallerHeadingType = {
    className?: string;
    children: ReactNode;
};

const SmallerHeading = ({ ...props } : SmallerHeadingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <h3 className={clsx(className, "text-[22px] md:text-[24px] lg:text-[25px] font-bold tracking-relaxed")}>
                {children}
            </h3>
        </Fragment>
    );
};

export default SmallerHeading;