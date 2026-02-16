import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type RelativeOverlayWrapperType = {
    className?: string;
    id?: string;
    children?: ReactNode;
};

const RelativeOverlayWrapper = ({ ...props }: RelativeOverlayWrapperType) => {
    const {
        className,
        id,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "relative relative-overlay-wrapper-component")}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default RelativeOverlayWrapper;