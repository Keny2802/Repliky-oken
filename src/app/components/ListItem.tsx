import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type ListItemType = {
    className?: string;
    children: ReactNode;
};

const ListItem = ({ ...props }: ListItemType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <li className={clsx(className, "list-disc list-item-component")}>
                {children}
            </li>
        </Fragment>
    );
};

export default ListItem;