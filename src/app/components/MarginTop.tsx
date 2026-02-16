import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type MarginTopType = {
    className?: string;
    children: ReactNode;
};

type OptionalMarginTopType = Partial<MarginTopType>;

const MarginTop = ({ ...props }: MarginTopType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "mt-3 md:mt-4 margin-top-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default MarginTop;