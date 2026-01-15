import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type OverlayWrapperType = {
    className?: string;
    children: React.ReactNode;
};

const OverlayWrapper = ({ ...props }: OverlayWrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className="relative">
                <Wrapper className={clsx("w-full absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3 5 lg:gap-4", className)}>
                    {children}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default OverlayWrapper;