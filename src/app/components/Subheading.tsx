import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface SubheadingType {
    className?: string;
    children?: ReactNode;
};

const Subheading = ({ ...props }: SubheadingType) => {
    const {
        className,
        children
    } = props;
    return (
        <Fragment>
            <p className={clsx("mt-2 md:mt-3 lg:mt-4 text-base md:text-[17px] lg:text-lg text-center", className)}>
                {children}
            </p>
        </Fragment>
    );
};

export default Subheading;