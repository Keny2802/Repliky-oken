import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface HeadingType {
    className?: string;
    children?: ReactNode;
};

const Heading = ({ ...props }: HeadingType) => {
    const {
        className,
        children
    } = props;
    return (
        <Fragment>
            <h2 className={clsx(`${className || ""} text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-6xl text-center`)}>
                {children}
            </h2>
        </Fragment>
    );
};

export default Heading;