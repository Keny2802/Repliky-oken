import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface OverlayWrapperType {
    className?: string;
    children?: ReactNode;
};

const OverlayWrapper = ({ ...props }: OverlayWrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default OverlayWrapper;