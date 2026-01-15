import {
  Fragment
} from "react";
import clsx from "clsx";

type PaddingType = {
    className?: string;
    children?: React.ReactNode;
};

const Padding = ({ ...props }: PaddingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <div className={clsx("p-3 md:p-4 lg:p-4.5 padding-wrapper", className)}>
                {children}
            </div>
        </Fragment>
    );
};

export default Padding;