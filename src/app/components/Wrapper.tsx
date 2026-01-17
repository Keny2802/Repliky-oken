import React, {
    CSSProperties,
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

type WrapperType = {
    attributes?: React.HTMLAttributes<HTMLDivElement>,
    className?: string;
    id?: string;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    ref?: React.Ref<HTMLDivElement>;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        onClick,
        children
    } = props;

    return (
        <Fragment>
            <div
            className={clsx("wrapper", className)}
            onClick={onClick}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;