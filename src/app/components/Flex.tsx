import {
  Fragment
} from "react";
import clsx from "clsx";

type FlexType = {
    className?: string;
    children?: React.ReactNode;
};

const Flex = ({ ...props }: FlexType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <div className={clsx("flex items-center gap-3 md:gap-3.5 lg:gap-4 flex-wrapper", className)}>
                {children}
            </div>
        </Fragment>
    );
};

export default Flex;