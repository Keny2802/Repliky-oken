import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type ListType = {
    className?: string;
    children: ReactNode;
};

const List = ({ ...props }: ListType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <ul className={clsx(className, "list-component")}>
                {children}
            </ul>
        </Fragment>
    );
};

export default List;