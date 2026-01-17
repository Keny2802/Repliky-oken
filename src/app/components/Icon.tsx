import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface iconType {
    className?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Icon = ({ ...props }: iconType) => {
    const {
        className,
        children,
        onClick
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8`)}
            onClick={onClick}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Icon;