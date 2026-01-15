import {
  Fragment
} from "react";
import clsx from "clsx";

type WrapperType = {
    className?: string;
    children?: React.ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <div className={clsx("wrapper", className)}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;